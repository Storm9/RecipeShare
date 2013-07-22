using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RecipeShare.Models;
using RecipeShare.DAL;
using Ninject;
using CloudinaryDotNet.Actions;
using CloudinaryDotNet;
using System.Configuration;

namespace RecipeShare.Controllers
{
    public class RecipeController : Controller
    {
        private IRepoSet repoSet;

        [Inject]
        public RecipeController(IRepoSet repoSet)
        {
            this.repoSet = repoSet;
        }

        public JsonResult GetImages(int id = 0)
        {
            // APPHARBOR CONFIG
            //Cloudinary cloudinary = new Cloudinary(ConfigurationManager.AppSettings.Get("CLOUDINARY_URL"));
            
            // LOCAL CONFIG
            CloudinaryDotNet.Account account = new CloudinaryDotNet.Account("hadwuldso", "748288728926438", "D3F_ieSV77X3IdUy8rWpBePYio8");
            CloudinaryDotNet.Cloudinary cloudinary = new CloudinaryDotNet.Cloudinary(account);
            
            ListResourcesResult lrr = cloudinary.ListResourcesByTag(id.ToString(), null);
            List<string> images = new List<string>();

            foreach (var item in lrr.Resources)
            {
                images.Add(item.Uri.Segments[5]);
            }


            return Json(images, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetRecipes(string term)
        {
            RecipeSearchServiceReference.RecipeSearchServiceClient obj = new RecipeSearchServiceReference.RecipeSearchServiceClient();
            var result = obj.GetRecipeNames(term);

            return Json(result);
        }

        public JsonResult GetIngredients(string term)
        {
            RecipeSearchServiceReference.RecipeSearchServiceClient obj = new RecipeSearchServiceReference.RecipeSearchServiceClient();
            var result = obj.GetIngredients(term);

            return Json(result);
        }
        
        //
        // GET: /Recipe/

        public ActionResult Index(string recipeName, string ingredientName)
        {
            var recipes = from recipe in repoSet.RecipeRepo.Get() select recipe;

            if (!String.IsNullOrEmpty(recipeName))
            {
                recipes = recipes.Where(recipe => recipe.Name.ToLower().Contains(recipeName.ToLower()));
            }

            if (!String.IsNullOrEmpty(ingredientName))
            {
                var recipeIds = from name in repoSet.IngredientNameRepo.Get()
                                where name.Name.ToLower().Contains(ingredientName.ToLower()) 
                                join ingredient in repoSet.IngredientRepo.Get()
                                on name.IngredientNameID equals ingredient.IngredientNameID select ingredient.RecipeID;
                recipes = (from recipe in recipes join id in recipeIds on recipe.RecipeID equals id select recipe).Distinct();
            }

            return View(recipes);
        }

        public ActionResult Rating(int recipeId, int rating)
        {
            Recipe recipe = repoSet.RecipeRepo.FindById(recipeId);
            recipe.Rating = (recipe.Rating * recipe.Votes + rating) / (double)(recipe.Votes + 1);
            recipe.Votes++;

            if (ModelState.IsValid)
            {
                repoSet.RecipeRepo.Update(recipe);
                repoSet.Save();
            }

            return RedirectToAction("Details", new { id = recipeId });
        }

        //
        // GET: /Recipe/Details/5

        public ActionResult Details(int id = 0)
        {
            Recipe recipe = repoSet.RecipeRepo.FindById(id);
            recipe.ChildRecipes = (from child in repoSet.RecipeRepo.Get()
                                   where child.ParentID == recipe.RecipeID
                                   select child).ToList();
            if (recipe == null)
            {
                return HttpNotFound();
            }
            return View(recipe);
        }
   
        private void UpdateIngredients(IEnumerable<Ingredient> ingredients, int recipeID = 0)
        {
            if (ingredients != null)
            {
                foreach (Ingredient ingredient in ingredients)
                {
                    if (ingredient.MeasureID == 0)
                    {
                        ingredient.MeasureID = null;
                    }
                    if (recipeID == 0)
                    {
                        repoSet.IngredientRepo.Update(ingredient);
                    }
                    else
                    {
                        ingredient.RecipeID = recipeID;
                        repoSet.IngredientRepo.Insert(ingredient);
                    }
                }
            }
        }


        //
        // GET: /Recipe/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Recipe/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(RecipeInputModel recipeInput)
        {
            if (ModelState.IsValid)
            {
                recipeInput.ParentID = recipeInput.RecipeID;
                Recipe recipe = recipeInput.toRecipe();
                repoSet.RecipeRepo.Insert(recipe);
                repoSet.Save();

                int recipeID = repoSet.RecipeRepo.Entry(recipe).RecipeID;
                UpdateIngredients(recipeInput.NewIngredients, recipeID);
                UpdateIngredients(recipeInput.OldIngredients, recipeID);
                repoSet.Save();
                return RedirectToAction("Details", new { id = recipeID });
            }

            return View(recipeInput);
        }

        //
        // GET: /Recipe/Edit/5

        public ActionResult Edit(int id = 0)
        {
            RecipeInputModel recipe = new RecipeInputModel();
            recipe.populateFromRecipe(repoSet.RecipeRepo.FindById(id));
            ViewData["MeasureNames"] = (from measure in repoSet.MeasureRepo.Get() select measure).ToList();
            ViewData["IngredientNames"] = (from ingredient in repoSet.IngredientNameRepo.Get() select ingredient).ToList();
            if (recipe == null)
            {
                return HttpNotFound();
            }
            return View(recipe);
        }

        //
        // POST: /Recipe/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(RecipeInputModel recipeInput)
        {
            if (ModelState.IsValid)
            {
                Recipe recipe = recipeInput.toRecipe();
                repoSet.RecipeRepo.Update(recipe);
                UpdateIngredients(recipeInput.OldIngredients);
                UpdateIngredients(recipeInput.NewIngredients, recipeInput.RecipeID);
                repoSet.Save();
                return RedirectToAction("Details", new { id = recipe.RecipeID });
            }
            return View(recipeInput);
        }

        //
        // GET: /Recipe/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Recipe recipe = repoSet.RecipeRepo.FindById(id);
            if (recipe == null)
            {
                return HttpNotFound();
            }
            return View(recipe);
        }

        //
        // POST: /Recipe/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Recipe recipe = repoSet.RecipeRepo.FindById(id);
            recipe.ChildRecipes = (from child in repoSet.RecipeRepo.Get()
                                   where child.ParentID == recipe.RecipeID
                                   select child).ToList();

            if (recipe.ParentID == 0 && recipe.ChildRecipes.Count > 0)
            {
                Recipe newParent = (Recipe)recipe.ChildRecipes.OrderByDescending(child => child.Rating).First();

                foreach (var child in recipe.ChildRecipes)
                {
                    Recipe r = repoSet.RecipeRepo.FindById(child.RecipeID);
                    r.ParentID = newParent.RecipeID;
                    repoSet.RecipeRepo.Update(r);
                }

                Recipe parentRecipe = repoSet.RecipeRepo.FindById(newParent.RecipeID);
                parentRecipe.ParentID = 0;
                repoSet.RecipeRepo.Update(parentRecipe);
            }

            repoSet.RecipeRepo.Delete(recipe);
            repoSet.Save();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            repoSet.Dispose();
            base.Dispose(disposing);
        }
    }
}
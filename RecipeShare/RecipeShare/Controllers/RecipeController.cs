using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RecipeShare.Models;
using RecipeShare.DAL;

namespace RecipeShare.Controllers
{
    public class RecipeController : Controller
    {
        private RecipeContext db = new RecipeContext();

        public JsonResult GetRecipes(string term)
        {
            var result = (from name in db.Recipes where name.Name.ToLower().Contains(term.ToLower()) select new { name.Name }).Distinct();
            
             return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetIngredients(string term)
        {
            var result = (from name in db.IngredientNames where name.Name.ToLower().Contains(term.ToLower()) select new { name.Name }).Distinct();

            return Json(result, JsonRequestBehavior.AllowGet);
        }
        
        //
        // GET: /Recipe/

        public ActionResult Index(string recipeName, string ingredientName)
        {
            var recipes = from recipe in db.Recipes select recipe;

            if (!String.IsNullOrEmpty(recipeName))
            {
                recipes = recipes.Where(recipe => recipe.Name.Contains(recipeName));
            }

            if (!String.IsNullOrEmpty(ingredientName))
            {
                var recipeIds = from name in db.IngredientNames where name.Name.Contains(ingredientName) join ingredient in db.Ingredients on name.IngredientNameID equals ingredient.IngredientNameID select ingredient.RecipeID;
                recipes = (from recipe in recipes join id in recipeIds on recipe.RecipeID equals id select recipe).Distinct();
            }

            return View(recipes);
        }

        public ActionResult Rating(int recipeId, int rating)
        {
            Recipe recipe = db.Recipes.Find(recipeId);
            int tempRating = recipe.Rating;
            double newRating = (recipe.Rating * recipe.Votes + rating) / (double)(recipe.Votes + 1);
            recipe.Rating = (int)Math.Round(newRating);
            //System.Diagnostics.Debug.WriteLine("(" + tempRating + " * " + recipe.Votes + " + " + rating + ") / " + (recipe.Votes + 1) + " = " + recipe.Rating + " : " + newRating);
            recipe.Votes++;

            if (ModelState.IsValid)
            {
                db.Entry(recipe).State = EntityState.Modified;
                db.SaveChanges();
            }

            return RedirectToAction("Details", new { id = recipeId });
        }

        //
        // GET: /Recipe/Details/5

        public ActionResult Details(int id = 0)
        {
            Recipe recipe = db.Recipes.Find(id);
            recipe.ChildRecipes = (from child in db.Recipes
                                   where child.ParentID == recipe.RecipeID
                                   select child).ToList();
            if (recipe == null)
            {
                return HttpNotFound();
            }
            return View(recipe);
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
                db.Recipes.Add(recipe);
                db.SaveChanges();
                int recipeID = db.Entry<Recipe>(recipe).Entity.RecipeID;
                if (recipeInput.OldIngredients != null)
                {
                    foreach (Ingredient ingredient in recipeInput.OldIngredients)
                    {
                        if (ingredient.MeasureID == 0)
                        {
                            ingredient.MeasureID = null;
                        }
                        ingredient.RecipeID = recipeID;
                        db.Ingredients.Add(ingredient);
                    }
                }
                if (recipeInput.NewIngredients != null)
                {
                    foreach (Ingredient ingredient in recipeInput.NewIngredients)
                    {
                        if (ingredient.MeasureID == 0)
                        {
                            ingredient.MeasureID = null;
                        }
                        ingredient.RecipeID = recipeID;
                        db.Ingredients.Add(ingredient);
                    }
                }
                db.SaveChanges();
                return RedirectToAction("Details", new { id = recipeID });
            }

            return View(recipeInput);
        }

        //
        // GET: /Recipe/Edit/5

        public ActionResult Edit(int id = 0)
        {
            RecipeInputModel recipe = new RecipeInputModel();
            recipe.populateFromRecipe(db.Recipes.Find(id));
            ViewData["MeasureNames"] = (from measure in db.Measures select measure).ToList();
            ViewData["IngredientNames"] = (from ingredient in db.IngredientNames select ingredient).ToList();
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
                db.Entry(recipe).State = EntityState.Modified;
                foreach (Ingredient ingredient in recipeInput.OldIngredients)
                {
                    if (ingredient.MeasureID == 0)
                    {
                        ingredient.MeasureID = null;
                    }
                    db.Entry(ingredient).State = EntityState.Modified;
                }
                if (recipeInput.NewIngredients != null)
                {
                    foreach (Ingredient ingredient in recipeInput.NewIngredients)
                    {
                        if (ingredient.MeasureID == 0)
                        {
                            ingredient.MeasureID = null;
                        }
                        db.Ingredients.Add(ingredient);
                    }
                }
                db.SaveChanges();
                return RedirectToAction("Details", new { id = recipe.RecipeID });
            }
            return View(recipeInput);
        }

        //
        // GET: /Recipe/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Recipe recipe = db.Recipes.Find(id);
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
            Recipe recipe = db.Recipes.Find(id);

            if (recipe.ParentID == 0 && recipe.ChildRecipes.Count > 0)
            {
                recipe.ChildRecipes = (from child in db.Recipes
                                       where child.ParentID == recipe.RecipeID
                                       select child).ToList();

                Recipe newParent = (Recipe)recipe.ChildRecipes.OrderByDescending(child => child.Rating).First();

                foreach (var child in recipe.ChildRecipes)
                {
                    Recipe r = db.Recipes.Find(child.RecipeID);
                    r.ParentID = newParent.RecipeID;
                }

                Recipe parentRecipe = db.Recipes.Find(newParent.RecipeID);
                parentRecipe.ParentID = 0;
            }

            db.Recipes.Remove(recipe);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}
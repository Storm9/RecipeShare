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

        //
        // GET: /Recipe/

        public ActionResult Index(string recipeName, string ingredientName)
        {
            var recipes = from recipe in db.Recipe select recipe;

            if (!String.IsNullOrEmpty(recipeName))
            {
                recipes = recipes.Where(recipe => recipe.Name.Contains(recipeName));
            }

            if (!String.IsNullOrEmpty(ingredientName))
            {
                var recipeIds = from name in db.IngredientName where name.Name.Contains(ingredientName) join ingredient in db.Ingredient on name.IngredientNameID equals ingredient.IngredientNameID select ingredient.RecipeID;
                recipes = (from recipe in recipes join id in recipeIds on recipe.RecipeID equals id select recipe).Distinct();
            }

            return View(recipes);
        }

        public ActionResult Rating(int recipeId, int rating)
        {
            Recipe recipe = db.Recipe.Find(recipeId);
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
            Recipe recipe = db.Recipe.Find(id);
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
        public ActionResult Create(Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                db.Recipe.Add(recipe);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(recipe);
        }

        //
        // GET: /Recipe/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Recipe recipe = db.Recipe.Find(id);
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
        public ActionResult Edit(Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                db.Entry(recipe).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Details", new { id = recipe.RecipeID });
            }
            return View(recipe);
        }

        //
        // GET: /Recipe/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Recipe recipe = db.Recipe.Find(id);
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
            Recipe recipe = db.Recipe.Find(id);
            db.Recipe.Remove(recipe);
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
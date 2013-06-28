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
    public class IngredientController : Controller
    {
        private RecipeContext db = new RecipeContext();

        //
        // GET: /Ingredient/

        public ActionResult Index()
        {
            var ingredient = db.Ingredient.Include(i => i.Recipe).Include(i => i.Measure).Include(i => i.IngredientName);
            return View(ingredient.ToList());
        }

        //
        // GET: /Ingredient/Details/5

        public ActionResult Details(int id = 0)
        {
            Ingredient ingredient = db.Ingredient.Find(id);
            if (ingredient == null)
            {
                return HttpNotFound();
            }
            return View(ingredient);
        }

        //
        // GET: /Ingredient/Create

        public ActionResult Create()
        {
            ViewBag.RecipeID = new SelectList(db.Recipe, "RecipeID", "Name");
            ViewBag.MeasureID = new SelectList(db.Measure, "MeasureID", "Name");
            ViewBag.IngredientNameID = new SelectList(db.IngredientName, "IngredientNameID", "Name");
            return View();
        }

        //
        // POST: /Ingredient/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Ingredient ingredient)
        {
            if (ModelState.IsValid)
            {
                db.Ingredient.Add(ingredient);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.RecipeID = new SelectList(db.Recipe, "RecipeID", "Name", ingredient.RecipeID);
            ViewBag.MeasureID = new SelectList(db.Measure, "MeasureID", "Name", ingredient.MeasureID);
            ViewBag.IngredientNameID = new SelectList(db.IngredientName, "IngredientNameID", "Name", ingredient.IngredientNameID);
            return View(ingredient);
        }

        //
        // GET: /Ingredient/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Ingredient ingredient = db.Ingredient.Find(id);
            if (ingredient == null)
            {
                return HttpNotFound();
            }
            ViewBag.RecipeID = new SelectList(db.Recipe, "RecipeID", "Name", ingredient.RecipeID);
            ViewBag.MeasureID = new SelectList(db.Measure, "MeasureID", "Name", ingredient.MeasureID);
            ViewBag.IngredientNameID = new SelectList(db.IngredientName, "IngredientNameID", "Name", ingredient.IngredientNameID);
            return View(ingredient);
        }

        //
        // POST: /Ingredient/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Ingredient ingredient)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ingredient).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.RecipeID = new SelectList(db.Recipe, "RecipeID", "Name", ingredient.RecipeID);
            ViewBag.MeasureID = new SelectList(db.Measure, "MeasureID", "Name", ingredient.MeasureID);
            ViewBag.IngredientNameID = new SelectList(db.IngredientName, "IngredientNameID", "Name", ingredient.IngredientNameID);
            return View(ingredient);
        }

        //
        // GET: /Ingredient/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Ingredient ingredient = db.Ingredient.Find(id);
            if (ingredient == null)
            {
                return HttpNotFound();
            }
            return View(ingredient);
        }

        //
        // POST: /Ingredient/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Ingredient ingredient = db.Ingredient.Find(id);
            db.Ingredient.Remove(ingredient);
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
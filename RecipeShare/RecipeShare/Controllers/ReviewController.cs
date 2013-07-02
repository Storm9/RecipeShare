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
    public class ReviewController : Controller
    {
        private RecipeContext db = new RecipeContext();

        //
        // GET: /Review/

        public ActionResult Index()
        {
            var reviews = db.Reviews.Include(r => r.Recipe);
            return View(reviews.ToList());
        }

        //
        // GET: /Review/Details/5

        public ActionResult Details(int id = 0)
        {
            Review review = db.Reviews.Find(id);
            if (review == null)
            {
                return HttpNotFound();
            }
            return View(review);
        }

        //
        // GET: /Review/Create

        public ActionResult Create()
        {
            ViewBag.RecipeID = new SelectList(db.Recipes, "RecipeID", "Name");
            return View();
        }

        //
        // POST: /Review/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Review review)
        {
            if (ModelState.IsValid)
            {
                db.Reviews.Add(review);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.RecipeID = new SelectList(db.Recipes, "RecipeID", "Name", review.RecipeID);
            return View(review);
        }

        //
        // GET: /Review/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Review review = db.Reviews.Find(id);
            if (review == null)
            {
                return HttpNotFound();
            }
            ViewBag.RecipeID = new SelectList(db.Recipes, "RecipeID", "Name", review.RecipeID);
            return View(review);
        }

        //
        // POST: /Review/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Review review)
        {
            if (ModelState.IsValid)
            {
                db.Entry(review).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.RecipeID = new SelectList(db.Recipes, "RecipeID", "Name", review.RecipeID);
            return View(review);
        }

        //
        // GET: /Review/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Review review = db.Reviews.Find(id);
            if (review == null)
            {
                return HttpNotFound();
            }
            return View(review);
        }

        //
        // POST: /Review/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Review review = db.Reviews.Find(id);
            db.Reviews.Remove(review);
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
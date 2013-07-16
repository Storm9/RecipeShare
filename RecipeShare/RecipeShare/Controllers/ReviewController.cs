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

namespace RecipeShare.Controllers
{
    public class ReviewController : Controller
    {
        private RepoSet repoSet;

        [Inject]
        public ReviewController(RepoSet repoSet)
        {
            this.repoSet = repoSet;
        }

        //
        // GET: /Review/Create/5

        public ActionResult Create(int id = 0)
        {
            ViewData["RecipeID"] = id;
            return View();
        }

        //
        // POST: /Review/Create/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Review review)
        {
            if (ModelState.IsValid)
            {
                if (String.IsNullOrEmpty(review.Name))
                    review.Name = "Anonymous";
                repoSet.ReviewRepo.Insert(review);
                repoSet.Save();
                return RedirectToAction("Details", "Recipe", new { id = review.RecipeID });
            }

            return View(review);
        }

        //
        // GET: /Review/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Review review = repoSet.ReviewRepo.FindById(id);
            if (review == null)
            {
                return HttpNotFound();
            }
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
                repoSet.ReviewRepo.Update(review);
                repoSet.Save();
                return RedirectToAction("Details", "Recipe", new { id = review.RecipeID });
            }
            
            return View(review);
        }

        //
        // GET: /Review/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Review review = repoSet.ReviewRepo.FindById(id);
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
            Review review = repoSet.ReviewRepo.FindById(id);
            repoSet.ReviewRepo.Delete(review);
            repoSet.Save();
            return RedirectToAction("Details", "Recipe", new { id = review.RecipeID });
        }

        protected override void Dispose(bool disposing)
        {
            repoSet.Dispose();
            base.Dispose(disposing);
        }
    }
}
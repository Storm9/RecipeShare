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
        private IReviewUnitOfWork unitOfWork;

        public ReviewController(IReviewUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
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
                unitOfWork.ReviewRepo.Insert(review);
                unitOfWork.Save();
                return RedirectToAction("Details", "Recipe", new { id = review.RecipeID });
            }

            return View(review);
        }

        //
        // GET: /Review/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Review review = unitOfWork.ReviewRepo.FindById(id);
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
                unitOfWork.ReviewRepo.Update(review);
                unitOfWork.Save();
                return RedirectToAction("Details", "Recipe", new { id = review.RecipeID });
            }
            
            return View(review);
        }

        //
        // GET: /Review/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Review review = unitOfWork.ReviewRepo.FindById(id);
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
            Review review = unitOfWork.ReviewRepo.FindById(id);
            unitOfWork.ReviewRepo.Delete(review);
            unitOfWork.Save();
            return RedirectToAction("Details", "Recipe", new { id = review.RecipeID });
        }

        protected override void Dispose(bool disposing)
        {
            unitOfWork.Dispose();
            base.Dispose(disposing);
        }
    }
}
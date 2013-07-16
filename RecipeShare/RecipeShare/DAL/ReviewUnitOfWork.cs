using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RecipeShare.Models;

namespace RecipeShare.DAL
{
    public class ReviewUnitOfWork : UnitOfWork, IReviewUnitOfWork
    {
        private GenericRepository<Review> reviewRepo;

        public IGenericRepository<Review> ReviewRepo
        {
            get
            {
                if (this.reviewRepo == null)
                {
                    this.reviewRepo = new GenericRepository<Review>(context);
                }
                return this.reviewRepo;
            }
        }

    }
}
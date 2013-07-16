using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RecipeShare.Models;

namespace RecipeShare.DAL
{
    public class RepoSet : IRepoSet
    {
        private GenericRepository<Recipe> recipeRepo;
        private GenericRepository<Ingredient> ingredientRepo;
        private GenericRepository<IngredientName> ingredientNameRepo;
        private GenericRepository<Measure> measureRepo;
        private GenericRepository<Review> reviewRepo;

        protected RecipeContext context = new RecipeContext();

        public IGenericRepository<Recipe> RecipeRepo
        {
            get
            {
                if (this.recipeRepo == null)
                {
                    this.recipeRepo = new GenericRepository<Recipe>(context);
                }
                return this.recipeRepo;
            }
        }

        public IGenericRepository<Ingredient> IngredientRepo
        {
            get
            {
                if (this.ingredientRepo == null)
                {
                    this.ingredientRepo = new GenericRepository<Ingredient>(context);
                }
                return this.ingredientRepo;
            }
        }

        public IGenericRepository<IngredientName> IngredientNameRepo
        {
            get
            {
                if (this.ingredientNameRepo == null)
                {
                    this.ingredientNameRepo = new GenericRepository<IngredientName>(context);
                }
                return this.ingredientNameRepo;
            }
        }

        public IGenericRepository<Measure> MeasureRepo
        {
            get
            {
                if (this.measureRepo == null)
                {
                    this.measureRepo = new GenericRepository<Measure>(context);
                }
                return this.measureRepo;
            }
        }

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

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed && disposing)
            {
                context.Dispose();
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        
    }
}
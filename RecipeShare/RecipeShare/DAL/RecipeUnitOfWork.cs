using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RecipeShare.Models;

namespace RecipeShare.DAL
{
    public class RecipeUnitOfWork : UnitOfWork, IRecipeUnitOfWork
    {
        private GenericRepository<Recipe> recipeRepo;
        private GenericRepository<Ingredient> ingredientRepo;
        private GenericRepository<IngredientName> ingredientNameRepo;
        private GenericRepository<Measure> measureRepo;

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
        
    }
}
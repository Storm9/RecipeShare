using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using RecipeShare.DAL;
using RecipeShare.Models;

using Moq;

namespace RecipeShare.Tests.DAL
{
    class RecipeMockUnitOfWork : IRepoSet
    {

        public RecipeMockUnitOfWork()
        {
            
        }

        public IGenericRepository<Recipe> RecipeRepo
        {
            get { throw new NotImplementedException(); }
        }

        public IGenericRepository<Ingredient> IngredientRepo
        {
            get { throw new NotImplementedException(); }
        }

        public IGenericRepository<IngredientName> IngredientNameRepo
        {
            get { throw new NotImplementedException(); }
        }

        public IGenericRepository<Measure> MeasureRepo
        {
            get { throw new NotImplementedException(); }
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}

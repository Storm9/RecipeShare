using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RecipeShare.Models;

namespace RecipeShare.DAL
{
    public interface IRecipeUnitOfWork : IDisposable
    {
        IGenericRepository<Recipe> RecipeRepo { get; }
        IGenericRepository<Ingredient> IngredientRepo { get; }
        IGenericRepository<IngredientName> IngredientNameRepo { get; }
        IGenericRepository<Measure> MeasureRepo { get; }
        void Save();
    }
}

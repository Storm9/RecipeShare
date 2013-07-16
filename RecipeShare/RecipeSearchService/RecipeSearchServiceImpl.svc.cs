using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Configuration;
using System.Data.SqlClient;
using System.Data.Linq;

namespace RecipeSearchService
{
    public class ReceipeSearchServiceImpl : IRecipeSearchService
    {

        public List<String> GetRecipeNames(string prefix)
        {
            List<String> names = new List<String>();
            RecipeSearchDataClassesDataContext dc = GetDataContext();

            var recipes =
                from recipe in dc.Recipes
                where recipe.Name.ToLower().StartsWith(prefix.ToLower())
                select recipe;

            if (recipes != null)
            {
                foreach (var recipe in recipes)
                {
                    names.Add(AjaxControlToolkit.AutoCompleteExtender.CreateAutoCompleteItem(recipe.RecipeID.ToString(), recipe.Name));
                }
            }

            return names;
        }

        public List<String> GetIngredients(string prefix)
        {
            List<String> ingredientNames = new List<String>();
            RecipeSearchDataClassesDataContext dc = GetDataContext();

            var ingredients =
                from ingredient in dc.IngredientNames
                where ingredient.Name.ToLower().StartsWith(prefix.ToLower())
                select ingredient;

            foreach (var ingredient in ingredients)
            {
                ingredientNames.Add(AjaxControlToolkit.AutoCompleteExtender.CreateAutoCompleteItem(ingredient.IngredientNameID.ToString(), ingredient.Name));
           } 

            return ingredientNames;
        }

        private SqlConnection GetSqlConnection()
        {
            if (ConfigurationManager.ConnectionStrings.Count > 0 && ConfigurationManager.ConnectionStrings["RecipeContext"] != null)
            {
                return new SqlConnection(ConfigurationManager.ConnectionStrings["RecipeContext"].ConnectionString);
            }
            else
            {
                return null;
            }

        }

        private RecipeSearchDataClassesDataContext GetDataContext()
        {
            return new RecipeSearchDataClassesDataContext(GetSqlConnection());
        }
    }
}

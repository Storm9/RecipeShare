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
                where recipe.Name.StartsWith(prefix)
                select recipe;

            foreach (var recipe in recipes)
            {
                string name = AjaxControlToolkit.AutoCompleteExtender.CreateAutoCompleteItem(recipe.RecipeID.ToString(), recipe.Name);
            }

            return names;
        }

        private SqlConnection GetSqlConnection()
        {as if 
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

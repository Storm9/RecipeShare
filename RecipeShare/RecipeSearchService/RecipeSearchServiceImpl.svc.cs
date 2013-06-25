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
        
        public string GetData(int value)
        {
            return string.Format("You entered: {0}", value);
        }

        public CompositeType GetDataUsingDataContract(CompositeType composite)
        {
            if (composite == null)
            {
                throw new ArgumentNullException("composite");
            }
            if (composite.BoolValue)
            {
                composite.StringValue += "Suffix";
            }
            return composite;
        }

        public string GetRecipeNameById(int id)
        {
            string connectionString = GetSqlConnection();
            SqlConnection conn = new SqlConnection(connectionString);
            RecipeSearchDataClassesDataContext dc = new RecipeSearchDataClassesDataContext(conn);
   
            try
            {
                var recipeNameQuery = 
                    from recipe in dc.Recipes
                    where recipe.RecipeID == id
                    select recipe.Name;
            }
            catch (Exception e)
            {
                //TODO: Log
            }
            finally
            {
                conn.Close();
            }
            return null;
        }

        private string GetSqlConnection()
        {
            if (ConfigurationManager.ConnectionStrings.Count > 0 && ConfigurationManager.ConnectionStrings["RecipeContext"] != null)
            {
                return ConfigurationManager.ConnectionStrings["RecipeContext"].ConnectionString;
            } else
            {
                return null;
            }

        }
    }
}

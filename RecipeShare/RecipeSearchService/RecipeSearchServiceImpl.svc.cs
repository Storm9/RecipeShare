using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Configuration;
using System.Data.SqlClient;

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
            try
            {
                SqlConnection conn = new SqlConnection(connectionString);
                conn.Open();
                Console.WriteLine("Conn State: " + conn.State.ToString());
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
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

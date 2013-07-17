using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace RecipeSearchService
{
    [ServiceContract]
    public interface IRecipeSearchService
    {
        [OperationContract]
        List<String> GetRecipeNames(string prefix);

        [OperationContract]
        List<String> GetIngredients(string prefix);
    }
} 

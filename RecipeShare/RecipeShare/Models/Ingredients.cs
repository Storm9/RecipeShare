using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RecipeShare.Models
{
    public class Ingredients
    {
        public int IngredientsID { get; set; }
        public int RecipeID { get; set; }
        public double? Quantity { get; set; }
        public int? MeasureID { get; set; }
        public int IngredientID { get; set; }
        public string Description { get; set; }
        public virtual Recipe Recipe { get; set; }
        public virtual Measure Measure { get; set; }
        public virtual Ingredient Ingredient { get; set; }
    }
}
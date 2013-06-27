using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RecipeShare.Models
{
    public class Ingredient
    {
        public int IngredientID { get; set; }
        public int RecipeID { get; set; }

        [Range(0.01, 100, ErrorMessage = "Quantity must be between 1/100 and 100.")]
        public double? Quantity { get; set; }
        
        public int? MeasureID { get; set; }
        public int IngredientNameID { get; set; }

        [Display(Name = "Enter description i.e. sliced, cubed.")]
        [MaxLength(50, ErrorMessage = "Description must be 50 characters or less.")]
        public string Description { get; set; }

        public virtual Recipe Recipe { get; set; }
        public virtual Measure Measure { get; set; }
        public virtual IngredientName IngredientName { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace RecipeShare.Models
{
    public class IngredientInputModel
    {
        public int IngredientID { get; set; }
        public int RecipeID { get; set; }

        [Range(0.01, 100, ErrorMessage = "Quantity must be between 1/100 and 100.")]
        public double? Quantity { get; set; }

        public string IngredientName { get; set; }
        public string Measure { get; set; }

        [Display(Name = "Enter description i.e. sliced, cubed.")]
        [MaxLength(50, ErrorMessage = "Description must be 50 characters or less.")]
        public string Description { get; set; }

    }
}
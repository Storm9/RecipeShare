using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RecipeShare.Models
{
    public class IngredientName
    {
        public int IngredientNameID { get; set; }

        [Display(Name = "Enter ingredient name.")]
        [Required(ErrorMessage = "Name cannot be left blank.")]
        [MaxLength(50, ErrorMessage = "Name must be 50 characters or less.")]
        public string Name { get; set; }
    }
}
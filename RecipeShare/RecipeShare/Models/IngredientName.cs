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

        [Required(ErrorMessage = "Name cannot be left blank.")]
        [DisplayFormat(NullDisplayText = "Enter ingredient name.")]
        [MaxLength(100)]
        public string Name { get; set; }
    }
}
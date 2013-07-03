using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RecipeShare.Models
{
    public class Recipe
    {
        public int RecipeID { get; set; }
        public int ParentID { get; set; }
        public int Rating { get; set; }
        public int Votes { get; set; }

        [Display(Name = "Enter recipe name.")]
        [Required(ErrorMessage = "Name cannot be left blank.")]
        [MaxLength(100, ErrorMessage = "Name must be 100 characters or less.")]
        public string Name { get; set; }

        [Display(Name = "Enter recipe instructions.")]
        [Required(ErrorMessage = "Instructions cannot be left blank.")]
        [MaxLength(1000, ErrorMessage = "Instructions must be 1000 characters or less.")]
        public string Instructions { get; set; }

        public virtual ICollection<Ingredient> Ingredients { get; set; }
        public virtual ICollection<Image> Images { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        public virtual ICollection<Recipe> ChildRecipes { get; set; }
    }
}
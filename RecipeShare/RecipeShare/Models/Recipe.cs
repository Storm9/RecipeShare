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
        
        [Range(1, 5, ErrorMessage = "Rating must be between 1 and 5.")]
        public int Rating { get; set; }

        public int Votes { get; set; }

        [Required(ErrorMessage = "Name cannot be left blank.")]
        [DisplayFormat(NullDisplayText = "Enter recipe name.")]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required(ErrorMessage = "Instructions cannot be left blank.")]
        [DisplayFormat(NullDisplayText = "Enter recipe instructions.")]
        [MaxLength(500)]
        public string Instructions { get; set; }

        public virtual ICollection<Ingredient> Ingredient { get; set; }
        public virtual ICollection<Image> Image { get; set; }
        public virtual ICollection<Review> Review { get; set; }
    }
}
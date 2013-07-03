using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace RecipeShare.Models
{
    public class Review
    {
        public int ReviewID { get; set; }
        public int RecipeID { get; set; }

        [Display(Name = "Enter your name.")]
        [MaxLength(50, ErrorMessage = "Name must be 50 characters or less.")]
        public string Name { get; set; }

        [Display(Name = "Enter your review.")]
        [Required(ErrorMessage = "Review cannot be left blank.")]
        [MaxLength(500, ErrorMessage = "Review must be 500 characters or less.")]
        public string Entry { get; set; }

        //public virtual Recipe Recipe { get; set; }
    }
}
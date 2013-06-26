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
        
        [DisplayFormat(NullDisplayText = "Enter your name.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Review cannot be left blank.")]
        [DisplayFormat(NullDisplayText = "Enter your review.")]
        [MaxLength(500)]
        public string Entry { get; set; }

        public virtual Recipe Recipe { get; set; }
    }
}
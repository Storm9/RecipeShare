using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RecipeShare.Models
{
    public class Measure
    {
        public int MeasureID { get; set; }

        [Display(Name = "Measurement")]
        [MaxLength(25, ErrorMessage = "Measure name must be 25 characters or less.")]
        public string Name { get; set; }
    }
}
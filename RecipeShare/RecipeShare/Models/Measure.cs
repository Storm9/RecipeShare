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

        [MaxLength(15)]
        public string Name { get; set; }
    }
}
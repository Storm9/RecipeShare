using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RecipeShare.Models
{
    public class Review
    {
        public int ReviewID { get; set; }
        public int RecipeID { get; set; }
        public string Name { get; set; }
        public string Entry { get; set; }
        public virtual Recipe Recipe {get;set;}
    }
}
using System;
using System.Collections.Generic;
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
        public string Name { get; set; }
        public string Instructions { get; set; }
        public virtual ICollection<Ingredient> Ingredient { get; set; }
        public virtual ICollection<Image> Image { get; set; }
        public virtual ICollection<Review> Review { get; set; }
    }
}
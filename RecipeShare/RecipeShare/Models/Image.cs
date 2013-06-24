using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RecipeShare.Models
{
    public class Image
    {
        public int ImageID { get; set; }
        public int RecipeID { get; set; }
        public string URI { get; set; }
        public virtual Recipe Recipe { get; set; }
    }
}
using RecipeShare.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace RecipeShare.DAL
{
    public class RecipeContext : DbContext
    {
        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<Measure> Measure { get; set; }
        public DbSet<Ingredient> Ingredient { get; set; }
        public DbSet<Ingredients> Ingredients { get; set; }
        public DbSet<Review> Review { get; set; }
        public DbSet<Image> Image { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
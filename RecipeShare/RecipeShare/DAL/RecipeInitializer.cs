using Devtalk.EF.CodeFirst;
using RecipeShare.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RecipeShare.DAL
{
    public class RecipeInitializer : CreateDatabaseIfNotExists<RecipeContext>
    {
        protected override void Seed(RecipeContext context)
        {
            var recipes = new List<Recipe>
            {
                new Recipe {ParentID = 0, Rating = 4, Votes = 1, Name = "Omelet", Instructions = "Add onion, tomato, and spinach to pan and gently stir fry in vegetable oil for 2 minutes. Pour beaten eggs evenly over the mixture and let it coagulate. Add in shredded bacon and cheese at the end to melt in. Season with your favorite spices."},
                new Recipe {ParentID = 0, Rating = 1, Votes = 1, Name = "PB&J Sandwich", Instructions = "Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"},
                new Recipe {ParentID = 2, Rating = 3, Votes = 10, Name = "PB & Nutella Sandwich", Instructions = "This is a variation to the standard PB&J Sandwich. Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"},
                new Recipe {ParentID = 2, Rating = 5, Votes = 20, Name = "PB & Jam Sandwich", Instructions = "This is a variation to the standard PB&J Sandwich. Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"},
                new Recipe {ParentID = 2, Rating = 2, Votes = 1, Name = "PB Sandwich", Instructions = "This is a variation to the standard PB&J Sandwich. Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"},
                new Recipe {ParentID = 2, Rating = 4, Votes = 15, Name = "PB & Chocolate Sandwich", Instructions = "This is a variation to the standard PB&J Sandwich. Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"}
            };
            recipes.ForEach(recipe => context.Recipes.Add(recipe));
            context.SaveChanges();

            var measures = new List<Measure>
            {
                new Measure {Name = "cups"},
                new Measure {Name = "grams"},
                new Measure {Name = "kilograms"},
                new Measure {Name = "liters"},
                new Measure {Name = "pints"},
                new Measure {Name = "ounces"},
                new Measure {Name = "teaspoons"},
                new Measure {Name = "tablespoons"},
                new Measure {Name = "leaves"},
                new Measure {Name = "strips"},
                new Measure {Name = "slices"}
            };
            measures.ForEach(measure => context.Measures.Add(measure));
            context.SaveChanges();

            var ingredientNames = new List<IngredientName>
            {
                new IngredientName {Name = "eggs"},
                new IngredientName {Name = "bacon"},
                new IngredientName {Name = "onion"},
                new IngredientName {Name = "garlic"},
                new IngredientName {Name = "spinach"},
                new IngredientName {Name = "tomato"},
                new IngredientName {Name = "cheese"},
                new IngredientName {Name = "peanut butter"},
                new IngredientName {Name = "jelly"},
                new IngredientName {Name = "bread"},
                new IngredientName {Name = "nutella"},
                new IngredientName {Name = "jam"},
                new IngredientName {Name = "chocolate"}
            };
            ingredientNames.ForEach(ingredientName => context.IngredientNames.Add(ingredientName));
            context.SaveChanges();

            var ingredients = new List<Ingredient>
            {
                new Ingredient {RecipeID = 1, Quantity = 3, IngredientNameID = 1, Description = "beaten"},
                new Ingredient {RecipeID = 1, Quantity = 3, MeasureID = 10, IngredientNameID = 2, Description = "shredded"},
                new Ingredient {RecipeID = 1, Quantity = 2, MeasureID = 8, IngredientNameID = 3, Description = "finely chopped"},
                new Ingredient {RecipeID = 1, Quantity = 5, MeasureID = 9, IngredientNameID = 5, Description = "shredded"},
                new Ingredient {RecipeID = 1, Quantity = 2, MeasureID = 8, IngredientNameID = 6, Description = "chopped"},
                new Ingredient {RecipeID = 1, Quantity = 2, MeasureID = 8, IngredientNameID = 7, Description = "finely shredded"},
                new Ingredient {RecipeID = 2, Quantity = 2, MeasureID = 11, IngredientNameID = 10},
                new Ingredient {RecipeID = 2, IngredientNameID = 8},
                new Ingredient {RecipeID = 2, IngredientNameID = 9},
                new Ingredient {RecipeID = 3, Quantity = 2, MeasureID = 11, IngredientNameID = 10},
                new Ingredient {RecipeID = 3, IngredientNameID = 8, Description = "creamy"},
                new Ingredient {RecipeID = 3, IngredientNameID = 11},
                new Ingredient {RecipeID = 4, Quantity = 2, MeasureID = 11, IngredientNameID = 10},
                new Ingredient {RecipeID = 4, IngredientNameID = 8},
                new Ingredient {RecipeID = 4, IngredientNameID = 12},
                new Ingredient {RecipeID = 5, Quantity = 2, MeasureID = 11, IngredientNameID = 10},
                new Ingredient {RecipeID = 5, IngredientNameID = 8, Description = "chunky"},
                new Ingredient {RecipeID = 6, Quantity = 2, MeasureID = 11, IngredientNameID = 10},
                new Ingredient {RecipeID = 6, IngredientNameID = 8},
                new Ingredient {RecipeID = 6, IngredientNameID = 13}
            };
            ingredients.ForEach(ingredient => context.Ingredients.Add(ingredient));
            context.SaveChanges();

            var reviews = new List<Review>
            {
                new Review {RecipeID = 1, Name = "Ben", Entry = "Best breakfast recipe ever!"},
                new Review {RecipeID = 1, Name = "Johnny", Entry = "It was ok, it could use some mushrooms or something like that."},
                new Review {RecipeID = 1, Name = "Anonymous", Entry = "Omelets suck but you don't know who said this so you can't do anything about it!"},
                new Review {RecipeID = 2, Name = "Ben", Entry = "Can't go wrong with this one."},
                new Review {RecipeID = 2, Name = "PB&JLuvr13", Entry = "OMG OMG OMG This is all I eat!!!"},
                new Review {RecipeID = 3, Name = "PB&JLuvr13", Entry = "This is outrageous! PB&J4Lyfe! Get this nutella crap outta here! 0 stars!"},
                new Review {RecipeID = 4, Name = "PB&JLuvr13", Entry = "Jam instead of jelly? Who are you??"},
                new Review {RecipeID = 5, Name = "PB&JLuvr13", Entry = "-_- seriously?"},
                new Review {RecipeID = 6, Name = "PB&JLuvr13", Entry = "Ok now this is just ridiculous!!"}
            };
            reviews.ForEach(review => context.Reviews.Add(review));
            context.SaveChanges();
        }
    }
}
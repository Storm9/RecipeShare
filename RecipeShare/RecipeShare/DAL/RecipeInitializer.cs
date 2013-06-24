using RecipeShare.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RecipeShare.DAL
{
    public class RecipeInitializer : DropCreateDatabaseIfModelChanges<RecipeContext>
    {
        protected override void Seed(RecipeContext context)
        {
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
            measures.ForEach(measure => context.Measure.Add(measure));
            context.SaveChanges();

            var ingredients = new List<Ingredient>
            {
                new Ingredient {Name = "eggs"},
                new Ingredient {Name = "bacon"},
                new Ingredient {Name = "onion"},
                new Ingredient {Name = "garlic"},
                new Ingredient {Name = "spinach"},
                new Ingredient {Name = "tomato"},
                new Ingredient {Name = "cheese"},
                new Ingredient {Name = "peanut butter"},
                new Ingredient {Name = "jelly"},
                new Ingredient {Name = "bread"}
            };
            ingredients.ForEach(ingredient => context.Ingredient.Add(ingredient));
            context.SaveChanges();

            var recipes = new List<Recipe>
            {
                new Recipe {ParentID = 0, Rating = 4, Votes = 1, Name = "Omelet", Instructions = "Add onion, tomato, and spinach to pan and gently stir fry in vegetable oil for 2 minutes. Pour beaten eggs evenly over the mixture and let it coagulate. Add in shredded bacon and cheese at the end to melt in. Season with your favorite spices."},
                new Recipe {ParentID = 0, Rating = 5, Votes = 1, Name = "PB&J Sandwich", Instructions = "Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"}
            };
            recipes.ForEach(recipe => context.Recipe.Add(recipe));
            context.SaveChanges();

            var ingredientsList = new List<Ingredients>
            {
                new Ingredients {RecipeID = 1, Quantity = 3, IngredientID = 1, Description = "beaten"},
                new Ingredients {RecipeID = 1, Quantity = 3, MeasureID = 10, IngredientID = 2, Description = "shredded"},
                new Ingredients {RecipeID = 1, Quantity = 2, MeasureID = 8, IngredientID = 3, Description = "finely chopped"},
                new Ingredients {RecipeID = 1, Quantity = 5, MeasureID = 9, IngredientID = 5, Description = "shredded"},
                new Ingredients {RecipeID = 1, Quantity = 2, MeasureID = 8, IngredientID = 6, Description = "chopped"},
                new Ingredients {RecipeID = 1, Quantity = 2, MeasureID = 8, IngredientID = 7, Description = "finely shredded"},
                new Ingredients {RecipeID = 2, Quantity = 2, MeasureID = 11, IngredientID = 10},
                new Ingredients {RecipeID = 2, IngredientID = 8},
                new Ingredients {RecipeID = 2, IngredientID = 9}
            };
            ingredientsList.ForEach(ingredient => context.Ingredients.Add(ingredient));
            context.SaveChanges();

            var reviews = new List<Review>
            {
                new Review {RecipeID = 1, Name = "Ben", Entry = "Best breakfast recipe ever!"},
                new Review {RecipeID = 1, Name = "Johnny", Entry = "It was ok, it could use some mushrooms or something like that."},
                new Review {RecipeID = 2, Name = "Anonymous", Entry = "Omelets suck but you don't know who said this so you can't do anything about it!"},
                new Review {RecipeID = 2, Name = "Ben", Entry = "Can't go wrong with this one."},
                new Review {RecipeID = 2, Name = "PB&JLuvr13", Entry = "OMG OMG OMG This is all I eat!!!"}
            };
            reviews.ForEach(review => context.Review.Add(review));
            context.SaveChanges();
        }
    }
}
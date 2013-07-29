using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RecipeShare.Models
{

    [Serializable]
    public class RecipeInputModel
    {
        
        public int RecipeID { get; set; }
        public int ParentID { get; set; }
        public double Rating { get; set; }
        public int Votes { get; set; }

        [Display(Name = "Enter recipe name.")]
        [Required(ErrorMessage = "Name cannot be left blank.")]
        [MaxLength(100, ErrorMessage = "Name must be 100 characters or less.")]
        public string Name { get; set; }

        [Display(Name = "Enter recipe instructions.")]
        [Required(ErrorMessage = "Instructions cannot be left blank.")]
        [MaxLength(1000, ErrorMessage = "Instructions must be 1000 characters or less.")]
        public string Instructions { get; set; }

        public IEnumerable<IngredientInputModel> OldIngredients { get; set; }
        public IEnumerable<IngredientInputModel> NewIngredients { get; set; }

        public void populateFromRecipe(Recipe recipe)
        {
            RecipeID = recipe.RecipeID;
            ParentID = recipe.ParentID;
            Rating = recipe.Rating;
            Votes = recipe.Votes;
            Name = recipe.Name;
            Instructions = recipe.Instructions;
            List<IngredientInputModel> tempIngredients = new List<IngredientInputModel>();
            foreach (Ingredient i in recipe.Ingredients.AsEnumerable())
            {
                IngredientInputModel input = new IngredientInputModel
                {
                    IngredientID = i.IngredientID,
                    RecipeID = i.RecipeID,
                    Quantity = i.Quantity,
                    Description = i.Description
                };
                if (i.IngredientName != null)
                {
                    input.IngredientName = i.IngredientName.Name;
                }
                if (i.Measure != null)
                {
                    input.Measure = i.Measure.Name;
                }
                tempIngredients.Add(input);
            }
            OldIngredients = tempIngredients;
        }

        public Recipe toRecipe()
        {
            Recipe retval = new Recipe();
            retval.RecipeID = RecipeID;
            retval.ParentID = ParentID;
            retval.Rating = Rating;
            retval.Votes = Votes;
            retval.Name = Name;
            retval.Instructions = Instructions;
            return retval;
        }
    }
}
﻿using RecipeShare.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;
using System.Web.Mvc;

using RecipeShare.Models;
using RecipeShare.DAL;

using Moq;

namespace RecipeShare.Tests
{


    /// <summary>
    ///This is a test class for RecipeControllerTest and is intended
    ///to contain all RecipeControllerTest Unit Tests
    ///</summary>
    [TestClass()]
    public class RecipeControllerTest
    {


        private TestContext testContextInstance;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        #region Additional test attributes
        // 
        //You can use the following additional attributes as you write your tests:
        //
        //Use ClassInitialize to run code before running the first test in the class
        //[ClassInitialize()]
        //public static void MyClassInitialize(TestContext testContext)
        //{
        //}
        //
        //Use ClassCleanup to run code after all tests in a class have run
        //[ClassCleanup()]
        //public static void MyClassCleanup()
        //{
        //}
        //
        //Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //}
        //
        //Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //}
        //
        #endregion


        /// <summary>
        ///A test for RecipeController Constructor
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void RecipeControllerConstructorTest()
        {
            Mock<IRepoSet> mock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(mock.Object);
            Assert.IsInstanceOfType(target, typeof(RecipeController));
        }

        /// <summary>
        ///A test for Create
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void CreateTest()
        {
            Mock<IRepoSet> mock = new Mock<IRepoSet>();
            Mock<IGenericRepository<Measure>> measureRepoMock = new Mock<IGenericRepository<Measure>>();
            measureRepoMock.SetupAllProperties();
            mock.Setup(a => a.MeasureRepo).Returns(measureRepoMock.Object);
            Mock<IGenericRepository<IngredientName>> ingredientNameRepoMock = new Mock<IGenericRepository<IngredientName>>();
            ingredientNameRepoMock.SetupAllProperties();
            mock.Setup(a => a.IngredientNameRepo).Returns(ingredientNameRepoMock.Object);
            RecipeController target = new RecipeController(mock.Object);
            ActionResult actual = target.Create();
            Assert.IsInstanceOfType(actual, typeof(ViewResult));
        }

        /// <summary>
        ///A test for Create
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void CreateTest1()
        {
            List<Ingredient> ingredients = new List<Ingredient>
            {
                new Ingredient {RecipeID = 1, Quantity = 3, IngredientNameID = 1, Description = "beaten"}
            };
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();

            Mock<IGenericRepository<Recipe>> recipeRepoMock = new Mock<IGenericRepository<Recipe>>();
            RecipeInputModel recipeInput = new RecipeInputModel
            {
                ParentID = 0,
                Rating = 4,
                Votes = 1,
                Name = "Omelet",
                Instructions = "Add onion, tomato, and spinach to pan and gently stir fry in vegetable oil for 2 minutes. Pour beaten eggs evenly over the mixture and let it coagulate. Add in shredded bacon and cheese at the end to melt in. Season with your favorite spices.",
                NewIngredients = ingredients
            };
            var newRecipe = recipeInput.toRecipe();
            recipeRepoMock.Setup(a => a.Insert(It.IsAny<Recipe>())).Callback(() =>
            {
                newRecipe.RecipeID = 1;
            });
            recipeRepoMock.Setup(a => a.Entry(It.IsAny<Recipe>())).Returns(newRecipe);
            repoSetMock.Setup(a => a.RecipeRepo).Returns(recipeRepoMock.Object);

            Mock<IGenericRepository<Ingredient>> ingredientRepoMock = new Mock<IGenericRepository<Ingredient>>();
            int addedIngredients = 0;
            ingredientRepoMock.Setup(a => a.Update(It.IsAny<Ingredient>())).Callback(() => Assert.Fail("Should Not update Ingredients in the Create action."));
            ingredientRepoMock.Setup(a => a.Insert(It.IsAny<Ingredient>())).Callback(() => addedIngredients++);
            repoSetMock.Setup(a => a.IngredientRepo).Returns(ingredientRepoMock.Object);

            RecipeController target = new RecipeController(repoSetMock.Object);
            ActionResult actual = target.Create(recipeInput);

            Assert.AreEqual(ingredients.Count, addedIngredients);
            Assert.IsInstanceOfType(actual, typeof(RedirectToRouteResult));
        }

        /// <summary>
        ///A test for Delete
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void DeleteTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            Mock<IGenericRepository<Recipe>> recipeRepoMock = new Mock<IGenericRepository<Recipe>>();
            recipeRepoMock.Setup(a => a.FindById(1)).Returns(new Recipe
            {
                RecipeID = 1,
                ParentID = 0,
                Rating = 4,
                Votes = 1,
                Name = "Omelet",
                Instructions = "Add onion, tomato, and spinach to pan and gently stir fry in vegetable oil for 2 minutes. Pour beaten eggs evenly over the mixture and let it coagulate. Add in shredded bacon and cheese at the end to melt in. Season with your favorite spices.",
                Ingredients = new List<Ingredient>
                {
                    new Ingredient {RecipeID = 1, Quantity = 3, IngredientNameID = 1, Description = "beaten"}
                }
            });
            repoSetMock.Setup(a => a.RecipeRepo).Returns(recipeRepoMock.Object);

            RecipeController target = new RecipeController(repoSetMock.Object);
            int id = 1;
            ActionResult actual = target.Delete(id);
            Assert.IsInstanceOfType(actual, typeof(ViewResult));
        }

        /// <summary>
        ///A test for DeleteConfirmed
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void DeleteConfirmedTest()
        {
            Recipe deleted = new Recipe
            {
                RecipeID = 2,
                ParentID = 0,
                Rating = 1,
                Votes = 1,
                Name = "PB&J Sandwich",
                Instructions = "Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"
            };

            Recipe expectedNewParent = new Recipe
            {
                RecipeID = 4,
                ParentID = 2,
                Rating = 5,
                Votes = 20,
                Name = "PB & Jam Sandwich",
                Instructions = "This is a variation to the standard PB&J Sandwich. Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"
            };

            int expectedUpdated = 3;

            List<Recipe> recipes = new List<Recipe>
            {
                new Recipe
                {
                    RecipeID = 1,
                    ParentID = 0,
                    Rating = 4,
                    Votes = 1,
                    Name = "Omelet",
                    Instructions = "Add onion, tomato, and spinach to pan and gently stir fry in vegetable oil for 2 minutes. Pour beaten eggs evenly over the mixture and let it coagulate. Add in shredded bacon and cheese at the end to melt in. Season with your favorite spices."
                },
                deleted,
                new Recipe
                {
                    RecipeID = 3,
                    ParentID = 2,
                    Rating = 3,
                    Votes = 10,
                    Name = "PB & Nutella Sandwich",
                    Instructions = "This is a variation to the standard PB&J Sandwich. Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"
                },
                new Recipe
                {
                    RecipeID = 4,
                    ParentID = 2,
                    Rating = 5,
                    Votes = 20,
                    Name = "PB & Jam Sandwich",
                    Instructions = "This is a variation to the standard PB&J Sandwich. Spread ingredients on each slice separately, or mix it if you'd like! It's up to you! Put both slices together or fold and enjoy!"
                }
            };

            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            Mock<IGenericRepository<Recipe>> recipeRepoMock = new Mock<IGenericRepository<Recipe>>();
            recipeRepoMock.Setup(a => a.FindById(It.IsAny<int>())).Returns((int i) => (from r in recipes where r.RecipeID == i select r).SingleOrDefault<Recipe>());
            recipeRepoMock.Setup(a => a.Get()).Returns(recipes);
            recipeRepoMock.Setup(a => a.Delete(It.IsAny<Recipe>())).Callback((Recipe r) => Assert.AreEqual(r, deleted));

            int actualUpdated = 0;
            recipeRepoMock.Setup(a => a.Update(It.IsAny<Recipe>())).Callback(() => actualUpdated++);

            repoSetMock.Setup(a => a.RecipeRepo).Returns(recipeRepoMock.Object);

            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            int id = 2; // TODO: Initialize to an appropriate value
            ActionResult actual = target.DeleteConfirmed(id);
            recipeRepoMock.Verify(a => a.Delete(It.IsAny<Recipe>()), Times.Once());
            Assert.IsInstanceOfType(actual, typeof(RedirectToRouteResult));
            Assert.AreEqual(expectedUpdated, actualUpdated);
        }

        /// <summary>
        ///A test for Details
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void DetailsTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            Mock<IGenericRepository<Recipe>> recipeRepoMock = new Mock<IGenericRepository<Recipe>>();
            recipeRepoMock.Setup(a => a.FindById(1)).Returns(new Recipe
            {
                RecipeID = 1,
                ParentID = 0,
                Rating = 4,
                Votes = 1,
                Name = "Omelet",
                Instructions = "Add onion, tomato, and spinach to pan and gently stir fry in vegetable oil for 2 minutes. Pour beaten eggs evenly over the mixture and let it coagulate. Add in shredded bacon and cheese at the end to melt in. Season with your favorite spices.",
                Ingredients = new List<Ingredient>
                {
                    new Ingredient {RecipeID = 1, Quantity = 3, IngredientNameID = 1, Description = "beaten"}
                }
            });
            repoSetMock.Setup(a => a.RecipeRepo).Returns(recipeRepoMock.Object);
            RecipeController target = new RecipeController(repoSetMock.Object);
            int id = 1;
            ActionResult actual = target.Details(id);
            Assert.IsInstanceOfType(actual, typeof(ViewResult));
        }

        /// <summary>
        ///A test for Edit
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void EditTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();

            Mock<IGenericRepository<Recipe>> recipeRepoMock = new Mock<IGenericRepository<Recipe>>();
            recipeRepoMock.Setup(a => a.FindById(1)).Returns(new Recipe
            {
                RecipeID = 1,
                ParentID = 0,
                Rating = 4,
                Votes = 1,
                Name = "Omelet",
                Instructions = "Add onion, tomato, and spinach to pan and gently stir fry in vegetable oil for 2 minutes. Pour beaten eggs evenly over the mixture and let it coagulate. Add in shredded bacon and cheese at the end to melt in. Season with your favorite spices.",
                Ingredients = new List<Ingredient>
                {
                    new Ingredient {RecipeID = 1, Quantity = 3, IngredientNameID = 1, Description = "beaten"}
                }
            });
            repoSetMock.Setup(a => a.RecipeRepo).Returns(recipeRepoMock.Object);

            Mock<IGenericRepository<Measure>> measureRepoMock = new Mock<IGenericRepository<Measure>>();
            measureRepoMock.Setup(a => a.Get()).Returns(new List<Measure>()
            {
                new Measure
                {
                    MeasureID = 1,
                    Name = "Cups"
                }
            });
            repoSetMock.Setup(a => a.MeasureRepo).Returns(measureRepoMock.Object);

            Mock<IGenericRepository<IngredientName>> ingredientNameRepoMock = new Mock<IGenericRepository<IngredientName>>();
            ingredientNameRepoMock.Setup(a => a.Get()).Returns(new List<IngredientName>
            {
                new IngredientName
                {
                    IngredientNameID = 1,
                    Name = "eggs"
                }
            });
            repoSetMock.Setup(a => a.IngredientNameRepo).Returns(ingredientNameRepoMock.Object);

            RecipeController target = new RecipeController(repoSetMock.Object);
            int id = 1;
            ActionResult actual = target.Edit(id);
            Assert.IsInstanceOfType(actual, typeof(ViewResult));
        }

        /// <summary>
        ///A test for Edit
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void EditTest1()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            RecipeInputModel recipeInput = null; // TODO: Initialize to an appropriate value
            ActionResult expected = null; // TODO: Initialize to an appropriate value
            ActionResult actual;
            actual = target.Edit(recipeInput);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for GetIngredients
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void GetIngredientsTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            string term = string.Empty; // TODO: Initialize to an appropriate value
            JsonResult expected = null; // TODO: Initialize to an appropriate value
            JsonResult actual;
            actual = target.GetIngredients(term);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for GetRecipes
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void GetRecipesTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            string term = string.Empty; // TODO: Initialize to an appropriate value
            JsonResult expected = null; // TODO: Initialize to an appropriate value
            JsonResult actual;
            actual = target.GetRecipes(term);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Index
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void IndexTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            string recipeName = string.Empty; // TODO: Initialize to an appropriate value
            string ingredientName = string.Empty; // TODO: Initialize to an appropriate value
            ActionResult expected = null; // TODO: Initialize to an appropriate value
            ActionResult actual;
            actual = target.Index(recipeName, ingredientName);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Rating
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void RatingTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            int recipeId = 0; // TODO: Initialize to an appropriate value
            int rating = 0; // TODO: Initialize to an appropriate value
            ActionResult expected = null; // TODO: Initialize to an appropriate value
            ActionResult actual;
            actual = target.Rating(recipeId, rating);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }
    }
}

using RecipeShare.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
        public void RecipeControllerConstructorTest()
        {
            Mock<IRepoSet> mock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(mock.Object);
            Assert.Inconclusive("TODO: Implement code to verify target");
        }

        /// <summary>
        ///A test for Create
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
        public void CreateTest()
        {
            Mock<IRepoSet> mock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(mock.Object); // TODO: Initialize to an appropriate value
            ActionResult expected = null; // TODO: Initialize to an appropriate value
            ActionResult actual;
            actual = target.Create();
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
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
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();

            Mock<IGenericRepository<Recipe>> recipeRepoMock = new Mock<IGenericRepository<Recipe>>();
            RecipeInputModel recipeInput = new RecipeInputModel
            {
                ParentID = 0,
                Rating = 4,
                Votes = 1,
                Name = "Omelet",
                Instructions = "Add onion, tomato, and spinach to pan and gently stir fry in vegetable oil for 2 minutes. Pour beaten eggs evenly over the mixture and let it coagulate. Add in shredded bacon and cheese at the end to melt in. Season with your favorite spices.",
                NewIngredients = new List<Ingredient>
                {
                    new Ingredient {RecipeID = 1, Quantity = 3, IngredientNameID = 1, Description = "beaten"}
                }
            };
            var newRecipe = recipeInput.toRecipe();
            recipeRepoMock.Setup(a => a.Insert(It.IsAny<Recipe>())).Callback(() => 
            {
                newRecipe.RecipeID = 1;
            });
            recipeRepoMock.Setup(a => a.Entry(It.IsAny<Recipe>())).Returns(newRecipe);
            repoSetMock.Setup(a => a.RecipeRepo).Returns(recipeRepoMock.Object);

            Mock<IGenericRepository<Ingredient>> ingredientRepoMock = new Mock<IGenericRepository<Ingredient>>();
            List<Ingredient> addedIngredients = new List<Ingredient>();
            ingredientRepoMock.Setup(a => a.Update(It.IsAny<Ingredient>())).Callback(() => Assert.Fail("Should Not update Ingredients in the Create action."));
            ingredientRepoMock.Setup(a => a.Insert(It.IsAny<Ingredient>())).Callback((Ingredient i) => addedIngredients.Add(i));
            repoSetMock.Setup(a => a.IngredientRepo).Returns(ingredientRepoMock.Object);

            RecipeController target = new RecipeController(repoSetMock.Object);
            ActionResult actual = target.Create(recipeInput);

            Assert.IsInstanceOfType(actual, typeof(RedirectToRouteResult));
        }

        /// <summary>
        ///A test for Delete
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
        public void DeleteTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            Mock<IGenericRepository<Recipe>> recipeRepoMock = new Mock<IGenericRepository<Recipe>>();

            repoSetMock.Setup(a => a.RecipeRepo).Returns(recipeRepoMock.Object);

            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            int id = 0; // TODO: Initialize to an appropriate value
            ActionResult expected = null; // TODO: Initialize to an appropriate value
            ActionResult actual;
            actual = target.Delete(id);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for DeleteConfirmed
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
        public void DeleteConfirmedTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            int id = 0; // TODO: Initialize to an appropriate value
            ActionResult expected = null; // TODO: Initialize to an appropriate value
            ActionResult actual;
            actual = target.DeleteConfirmed(id);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Details
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
        public void DetailsTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            int id = 0; // TODO: Initialize to an appropriate value
            ActionResult expected = null; // TODO: Initialize to an appropriate value
            ActionResult actual;
            actual = target.Details(id);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Edit
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
        public void EditTest()
        {
            Mock<IRepoSet> repoSetMock = new Mock<IRepoSet>();
            RecipeController target = new RecipeController(repoSetMock.Object); // TODO: Initialize to an appropriate value
            int id = 0; // TODO: Initialize to an appropriate value
            ActionResult expected = null; // TODO: Initialize to an appropriate value
            ActionResult actual;
            actual = target.Edit(id);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Edit
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
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
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
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
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
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
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
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
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:51331")]
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

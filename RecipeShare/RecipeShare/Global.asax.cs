﻿using Devtalk.EF.CodeFirst;
using RecipeShare.DAL;
using RecipeShare.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Ninject;
using RecipeShare.Injection;

namespace RecipeShare
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            IKernel kernel = new StandardKernel(new DefaultModule());
            ControllerBuilder.Current.SetControllerFactory(new NinjectControllerFactory(kernel));

            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AuthConfig.RegisterAuth();

            Database.SetInitializer<RecipeContext>(new RecipeInitializer());
            //Database.SetInitializer<RecipeContext>(new DropCreateDatabaseAlways<RecipeContext>());
            //Database.SetInitializer<RecipeContext>(new DontDropDbJustCreateTablesIfModelChanged<RecipeContext>());
            //Database.SetInitializer<RecipeContext>(new CreateDatabaseIfNotExists<RecipeContext>());
        }
    }
}
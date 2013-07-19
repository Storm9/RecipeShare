using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RecipeShare.DAL;
using Ninject;
using Ninject.Modules;

namespace RecipeShare.Injection
{
    public class DefaultModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IRepoSet>().To<RepoSet>().InTransientScope();
        }
    }
}
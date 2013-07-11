using System.Data.Entity;
using Devtalk.EF.CodeFirst;
using RecipeShare.DAL;

[assembly: WebActivator.PreApplicationStartMethod(typeof(RecipeShare.App_Start.DontDropDbJustCreateTablesIfModelChangedStart), "Start")]

namespace RecipeShare.App_Start 
{
    public static class DontDropDbJustCreateTablesIfModelChangedStart 
    {
        public static void Start() 
        {
            Database.SetInitializer(new DontDropDbJustCreateTablesIfModelChanged<RecipeContext>());
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RecipeShare.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        protected RecipeContext context = new RecipeContext();

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed && disposing)
            {
                context.Dispose();
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
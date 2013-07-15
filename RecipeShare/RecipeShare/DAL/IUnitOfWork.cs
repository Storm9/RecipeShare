using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeShare.DAL
{
    public interface IUnitOfWork : IDisposable
    {
        void Save();
    }
}

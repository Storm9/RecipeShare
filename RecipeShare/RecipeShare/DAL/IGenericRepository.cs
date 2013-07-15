using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace RecipeShare.DAL
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> Get();
        TEntity FindById(int id);
        TEntity Entry(TEntity te);
        void Update(TEntity te);
        void Insert(TEntity te);
        void Delete(TEntity te);
    }
}

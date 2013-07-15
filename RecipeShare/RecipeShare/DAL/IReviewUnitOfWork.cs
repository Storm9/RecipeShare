﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RecipeShare.Models;

namespace RecipeShare.DAL
{
    public interface IReviewUnitOfWork : IUnitOfWork
    {
        IGenericRepository<Review> ReviewRepo { get; }
    }
}

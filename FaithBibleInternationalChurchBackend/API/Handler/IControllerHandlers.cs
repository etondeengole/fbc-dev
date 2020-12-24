using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Handler
{
    public interface IControllerHandlers<T>
    {
        Task<object> Handle(T request);
    }
}

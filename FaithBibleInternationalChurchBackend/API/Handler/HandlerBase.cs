using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Handler
{
    public abstract class HandlerBase<T> : IControllerHandlers<T>
    {
        public abstract Task<object> Handle(T request);
    }
}

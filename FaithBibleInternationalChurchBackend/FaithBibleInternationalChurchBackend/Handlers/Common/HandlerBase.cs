using System.Threading.Tasks;

namespace FaithBibleInternationalChurchBackend.Handlers
{
    public abstract class HandlerBase<T> : IControllerHandlers<T>
    {
        public abstract Task<object> Handle(T request);
    }
}
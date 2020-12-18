using System.Threading.Tasks;

namespace FaithBibleInternationalChurchBackend.Handlers
{
    public interface IControllerHandlers<T>
    {
        Task<object> Handle(T request);
    }
}
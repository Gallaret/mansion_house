using System.Threading.Tasks;

namespace Smart.House.Interface
{
    public interface IDispatcher<T>
    {
        Task<T> Dispatch(T state);
    }
}

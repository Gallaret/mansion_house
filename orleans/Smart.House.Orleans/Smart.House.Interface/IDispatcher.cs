using System.Threading.Tasks;

namespace Smart.House.Interface
{
    public interface IDispatcher<TState>
    {
        Task<TState> Dispatch(TState state);
    }
}

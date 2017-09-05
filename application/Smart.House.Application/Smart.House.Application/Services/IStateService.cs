using Smart.House.Application.Services.States;
using System.Threading.Tasks;

namespace Smart.House.Application.Services
{
    public interface IStateService<T> where T: IDeviceState
    {
        Task<T> GetNewState(T state);
    }
}

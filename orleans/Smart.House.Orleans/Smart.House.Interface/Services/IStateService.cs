using Smart.House.Interface.Services.States;
using System.Threading.Tasks;

namespace Smart.House.Interface.Services
{
    public interface IStateService<T> where T: IDeviceState
    {
        Task<T> GetNewState(T state);
    }
}

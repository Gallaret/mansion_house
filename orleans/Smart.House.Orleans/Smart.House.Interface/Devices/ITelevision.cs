using Orleans;
using System.Threading.Tasks;

namespace Smart.House.Interface.Devices
{
    public interface ITelevision : IGrainWithStringKey
    {
        Task SetFireplace();
    }
}

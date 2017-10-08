using Orleans;
using System.Threading.Tasks;

namespace Smart.House.Interface.Devices
{
    public class CameraState
    {
        public string Identifier { get; private set; }
        public string CurrentMotionFileName { get; set; }
        public bool IsMotionDetected { get; set; }
        public bool IsRecording { get; set; }
        public CameraState() { }

        public CameraState(string identifier)
        {
            Identifier = identifier;
        } 
    }

    public interface ICamera : IGrainWithStringKey
    {
        Task<CameraState> GetState();
        Task<bool> Initialize(string identifier);
        Task StartRecording();
        Task StopRecording();
    }
}

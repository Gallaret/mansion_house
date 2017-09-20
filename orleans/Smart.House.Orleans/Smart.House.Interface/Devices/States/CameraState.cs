namespace Smart.House.Interface.Devices.States
{
    public class CameraState
    {
        public string Identifier { get; set; }
        public string CurrentMotionFileName { get; set; }
        public bool IsMotionDetected { get; set; }

        public CameraState(string identifier)
        {
            Identifier = identifier;
        }

        public CameraState () { }

        public CameraState(CameraState previousState)
        {
            Identifier = previousState.Identifier;
            CurrentMotionFileName = previousState.CurrentMotionFileName;
        }
    }
}

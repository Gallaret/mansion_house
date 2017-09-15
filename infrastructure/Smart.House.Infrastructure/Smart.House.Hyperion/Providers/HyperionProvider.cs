using Smart.House.Application.Providers.Ambilight;

namespace Smart.House.Ambilight
{
    public class HyperionProvider : IAmbilightProvider
    {
        public string StartAlarmCommand => "hyperion-remote --effect 'Knight rider'";

        public string StopAlarmCommand => "hyperion-remote --clear";
    }
}

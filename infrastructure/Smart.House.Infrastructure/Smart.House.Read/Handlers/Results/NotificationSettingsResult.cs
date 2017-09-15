using System.Collections.Generic;

namespace Smart.House.Read.Handlers.Results
{
    public class NotificatorResult
    {
        public string Identifier { get; set; }
    }

    public class DeviceResult
    {
        public bool AmbientNotificationEnabled { get; set; }
    }

    public class NotificationSettingsResult
    {
        public IEnumerable<NotificatorResult> Noticators { get; set; }
        public DeviceResult Device { get; set; }
    }
}

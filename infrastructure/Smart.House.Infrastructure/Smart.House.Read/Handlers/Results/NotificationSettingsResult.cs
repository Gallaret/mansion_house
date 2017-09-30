using System.Collections.Generic;

namespace Smart.House.Read.Handlers.Results
{
    public class NotificatorSettings
    {
        public string Identifier { get; set; }
    }

    public class DeviceSettings
    {
        public bool AmbientNotificationEnabled { get; set; }
        public bool EmailNotificationEnabled { get; set; }
        public bool SmsNotificationEnabled { get; set; }
    }

    public class NotificationSettingsResult
    {
        public bool ShouldSend { get; set; }
        public IEnumerable<NotificatorSettings> Notificators { get; set; }
        public DeviceSettings Device { get; set; }
    }
}

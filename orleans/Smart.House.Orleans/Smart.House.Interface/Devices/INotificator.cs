using Orleans;
using Smart.House.Interface.Notifications;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Smart.House.Interface.Devices
{
    public class Notify
    {
        public Notify(string identifier, string value, Event @event)
        {
            Identifier = identifier;
            Value = value;
            Event = @event;
        }

        public string Identifier { get; private set; }
        public string Value { get; private set; }
        public Event Event { get; private set; }
    }

    public class EmailNotify : Notify
    {
        public EmailNotify(string identifier, Notify notify, string email)
            : base(identifier, notify.Value, notify.Event)
        {
            Address = email;
            Notifier = notify.Identifier;
            Attachments = new List<Attachment>();
        }

        public string Notifier { get; private set; }
        public string Address { get; private set; }
        public List<Attachment> Attachments { get; }
    }

    public class TextNotify : Notify
    {
        public TextNotify(string identifier, Notify notify, string number)
            : base(identifier, notify.Value, notify.Event)
        {
            Number = number;
            Notifier = notify.Identifier;
        }

        public string Notifier { get; private set; }
        public string Number { get; private set; }
    }

    public class NotificatorState
    {
        public NotificatorState() { }

        public NotificatorState(string identifier)
        {
            Identifier = identifier;
        }

        public string Identifier { get; }
        public int SmsLimit { get; set; }
        public int EmailLimit { get; set; }
        public DateTime LastNotifyTime { get; set; }
        public List<EmailNotify> EmailsToSend = new List<EmailNotify>();
        public List<TextNotify> SmsToSend = new List<TextNotify>();
        public ConcurrentQueue<EmailNotify> EmailQueue = new ConcurrentQueue<EmailNotify>();
        public ConcurrentQueue<TextNotify> SmsQueue = new ConcurrentQueue<TextNotify>();
    }

    public interface INotificator : IGrainWithStringKey
    {
        Task<NotificatorState> GetState();
        Task SendEmail(Notify notify);
        Task SendTextMessage(Notify hotify);
        Task<bool> Start(string identifier);
    }
}

using System.Collections.Generic;
using System.Net.Mail;

namespace Smart.House.Application.Domain.Devices.Notificator.Dtos
{
    using Notificator = House.Domain.Devices.Entities.Notificator;

    public class EmailMessage : Message
    {
        private readonly Notificator _notficator;

        public string Login { get; }
        public string Password { get; }
        public List<Attachment> Attachments { get; set; }
        public override string Provider => _notficator.Provider;
        public override T As<T>()
        {
            if (typeof(T) == typeof(TextMessage))
            {
                var message = new TextMessage(
                    _notficator, Title) as T;

                message.Receiver = Receiver;
                message.Content = Content;

                return message;
            }

            return this as T;
        }

        public EmailMessage(Notificator sender, string title)
            : base (sender.RemoteAddress, title)
        {
            _notficator = sender;

            Login = sender.RemoteLogin;
            Password = sender.RemotePassword;

            Attachments = new List<Attachment>();
        }     
    }
}

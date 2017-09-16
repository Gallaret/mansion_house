using Smart.House.Domain.Devices.Entities;
using System.IO;

namespace Smart.House.Domain.Notifications.ValueTypes
{
    public class Email
    {
        public string Title { get; }
        public string Sender { get; }
        public string Login { get; }
        public string Password { get; }
        public string Receiver { get; }
        public string Message { get; set; }
        public FileInfo[] Attachments { get; set; }

        public Email(Notificator sender, string receiver, string title)
        {
            Title = title;
            Sender = sender.RemoteAddress;
            Login = sender.RemoteLogin;
            Password = sender.RemotePassword;
            Receiver = receiver;
        }
    }
}

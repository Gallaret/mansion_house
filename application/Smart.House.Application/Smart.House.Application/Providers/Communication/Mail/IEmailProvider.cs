using Smart.House.Domain.Notifications.ValueTypes;
using System.IO;
using System.Threading.Tasks;

namespace Smart.House.Application.Providers.Communication.Mail
{
    public class EmailData
    {
        public string Sender { get; set; }
        public string Receiver { get; set; }
        public string Title { get; set; }
        public FileInfo[] Attachments { get; set; }
    }

    public interface IEmailProvider
    {
        Task Send(EmailData email);
    }
}

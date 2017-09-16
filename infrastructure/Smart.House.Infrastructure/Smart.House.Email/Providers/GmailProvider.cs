using Smart.House.Application.Providers.Communication.Mail;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Smart.House.Email.Providers
{
    using Email = Domain.Notifications.ValueTypes.Email;

    public class GmailProvider : IEmailProvider
    {
        public async Task Send(Email email)
        {
            using (var msg = new MailMessage(
                email.Sender, email.Receiver, email.Title, email.Message))
            {
                SmtpClient client = new SmtpClient
                {
                    UseDefaultCredentials = false,
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    Credentials = new NetworkCredential(email.Login, email.Password),
                    Timeout = 5000
                };

                await Task.Factory.StartNew(() => client.Send(msg));
            }
        }
    }
}

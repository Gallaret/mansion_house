using Smart.House.Application.Dtos.Notificator;
using Smart.House.Application.Providers.Notificator;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Smart.House.Messager.Providers.Email
{
    using Message = Application.Dtos.Notificator.Message;

    public class GmailProvider : IMessageProvider
    {
        public async Task Send(Message message)
        {
            var email = message.As<EmailMessage>();

            using (var emailMessage = new MailMessage(
                email.Sender, email.Receiver, email.Title, email.Content))
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

                await Task.Factory.StartNew(() => client.Send(emailMessage));
            }
        }
    }
}

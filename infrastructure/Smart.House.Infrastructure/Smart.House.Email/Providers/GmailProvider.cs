using Smart.House.Application.Providers.Communication.Mail;
using System;
using System.Threading.Tasks;

namespace Smart.House.Email.Providers
{

    public class GmailProvider : IEmailProvider
    {
        public Task Send(EmailData email)
        {
            throw new NotImplementedException();
        }
    }
}

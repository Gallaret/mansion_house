using Smart.House.Application.Providers.Communication.Mail;
using Smart.House.Email.Providers;
using System;
using System.Collections.Generic;

namespace Smart.House.Email
{
    public class EmailProviderFactory : Dictionary<string, Func<IEmailProvider>>, IEmailProviderFactory
    {
        public IEmailProvider Create(string name) => Count > 0 ? this[name]() : Initialize()[name]();

        private Dictionary<string, Func<IEmailProvider>> Initialize()
        {
            return new Dictionary<string, Func<IEmailProvider>>
            {
                { "gmail", () => new GmailProvider()}
            };
        }
    }
}

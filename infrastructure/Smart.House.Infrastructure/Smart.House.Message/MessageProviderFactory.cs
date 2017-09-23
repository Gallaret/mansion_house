using Smart.House.Application.Providers.Notificator;
using Smart.House.Messager.Providers.Email;
using Smart.House.Messager.Providers.Text;
using System;
using System.Collections.Generic;

namespace Smart.House.Messager
{
    public class MessageProviderFactory : Dictionary<string, Func<IMessageProvider>>, IMessageProviderFactory
    {
        public IMessageProvider Create(string provider) => this[provider]();

        private Dictionary<string, Func<IMessageProvider>> Initialize()
        {
            return new Dictionary<string, Func<IMessageProvider>>
            {
                { "gmail", () => new GmailProvider() },
                { "plusgsm", () => new PlusGSM(this) }
            };
        }
    }
}

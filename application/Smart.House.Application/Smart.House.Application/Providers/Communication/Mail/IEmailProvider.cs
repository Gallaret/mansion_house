using Smart.House.Domain.Notifications.ValueTypes;
using System.Threading.Tasks;

namespace Smart.House.Application.Providers.Communication.Mail
{
    public interface IEmailProvider
    {
        Task Send(Email email);
    }
}

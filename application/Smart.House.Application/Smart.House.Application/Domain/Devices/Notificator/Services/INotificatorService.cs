using System.Net.Mail;

namespace Smart.House.Application.Domain.Devices.Notificator.Services
{
    public interface INotificatorService
    {
        Attachment PrepareEmail(string identifier, string notifier, string filePath);
    }
}

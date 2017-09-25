using System.Net.Mail;

namespace Smart.House.Application.Services.Devices
{
    public interface INotificatorService
    {
        Attachment PrepareEmail(string identifier, string notifier, string filePath);
    }
}

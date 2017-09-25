using Smart.House.Application.Dtos.Connection;
using Smart.House.Application.Providers.Communication.Ftp;
using Smart.House.Application.Repositories;
using Smart.House.Application.Services.Devices;
using Smart.House.Domain.Devices.Entities;
using System.Net.Mail;

namespace Smart.House.Services.Devices.Notificator
{
    public class NotificatorService : INotificatorService
    {
        private readonly IFtpProvider _ftpProvider;
        private readonly IDeviceRepository<Device> _deviceRepository;

        public NotificatorService(IFtpProvider ftpProvider, IDeviceRepository<Device> deviceRepository)
        {
            _ftpProvider = ftpProvider;
            _deviceRepository = deviceRepository;
        }

        public Attachment PrepareEmail(string identifier, string notifier, string filePath)
        {
            var device = _deviceRepository.Find(notifier);

            using (var connection = _ftpProvider.Connect(new Credential(device)))
            {
                var file = connection.DownloadFile(filePath, "Attachements");

                return new Attachment(file.FullName);
            }
        }
    }
}

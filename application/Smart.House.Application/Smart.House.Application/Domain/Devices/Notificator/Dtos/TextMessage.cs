namespace Smart.House.Application.Domain.Devices.Notificator.Dtos
{
    using Notificator = House.Domain.Devices.Entities.Notificator;

    public class TextMessage : Message
    {
        private readonly Notificator _notficator;
        public override string Provider => _notficator.MobileProvider;

        public TextMessage(Notificator sender, string title)
            : base(sender.RemoteAddress, title)
        {
            _notficator = sender;
        }

        public override T As<T>()
        {
            if (typeof(T) == typeof(EmailMessage))
            {
                var message = new EmailMessage(
                    _notficator, Title) as T;

                message.Receiver = Receiver;
                message.Content = Content;

                return message;
            }

            return this as T;
        }
    }
}

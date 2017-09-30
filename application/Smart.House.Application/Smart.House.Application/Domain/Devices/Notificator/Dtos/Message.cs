namespace Smart.House.Application.Domain.Devices.Notificator.Dtos
{
    public abstract class Message
    {
        public string Title { get; }
        public string Sender { get; }
        public string Receiver { get; set; }
        public string Content { get; set; }
        public abstract string Provider { get; }
        public abstract T As<T>() where T: Message;

        public Message(string sender, string title)
        {
            Title = title;
            Sender = sender;
        }
    }
}

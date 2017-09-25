using Orleans;
using Smart.House.Grains.Resolvers;
using Smart.House.Interface.Devices;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
using Smart.House.Services.Devices.Notificator.Handlers.Commands;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Smart.House.Grains.Devices.Notificator
{
    public class Notificator : Grain<NotificatorState>, INotificator
    {
        private IDisposable stateWorker = null;
        private readonly Mediator _mediator;

        public Notificator(Mediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<bool> Start(string identifier)
        {
            if (stateWorker == null)
            {
                State = new NotificatorState(identifier);

                stateWorker = RegisterTimer(async (state) =>
                {
                    State = await _mediator.Dispatch(State);

                    await SendTextMessages();
                    await SendEmails();

                }, State, TimeSpan.FromSeconds(5), TimeSpan.FromSeconds(5));

                return await Task.FromResult(true);
            }

            return await Task.FromResult(false);
        }

        public async Task<NotificatorState> GetState()
        {
            return await Task.FromResult(State);
        }

        public async Task SendEmail(Notify notifier)
        {
            var settings = await GetMessageResult(State.Identifier);

            if (State.EmailLimit < settings.Limit)
                State.EmailQueue.Enqueue(new EmailNotify(
                    State.Identifier, notifier, settings.Email));
        }

        public async Task SendTextMessage(Notify notify)
        {
            var settings = await GetMessageResult(State.Identifier);

            if (State.SmsLimit < settings.Limit)
                State.SmsQueue.Enqueue(new TextNotify(
                    State.Identifier, notify, settings.Mobile));
        }

        private async Task SendEmails()
        {
            var tasks = new List<Task>();

            State.EmailsToSend.ForEach(emailNotify =>
            {
                tasks.Add(_mediator.DispatchRequest(new EmailNotificationCommand
                {
                    Identifier = emailNotify.Identifier,    
                    Value = emailNotify.Value,
                    Email = emailNotify.Address,
                    Attachments = emailNotify.Attachments,
                    Title = emailNotify.Event.ToString()
                }));
            });

            await Task.WhenAll(tasks);
        }

        private async Task SendTextMessages()
        {
            var tasks = new List<Task>();

            State.SmsToSend.ForEach(message =>
            {
                tasks.Add(_mediator.DispatchRequest(new TextNotificationCommand
                {
                    Identifier = message.Identifier,
                    Value = message.Value,
                    Mobile = message.Number,
                    Title = message.Event.ToString()
                }));
            });

            await Task.WhenAll(tasks);
        }

        private async Task<MessageSettingsResult> GetMessageResult(string identifier)
        {
            return await _mediator.DispatchRequest<MessageSettingsQuery, MessageSettingsResult>(
                new MessageSettingsQuery(identifier));
        }
    }
}

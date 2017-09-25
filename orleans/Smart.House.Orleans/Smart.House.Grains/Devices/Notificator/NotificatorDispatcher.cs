using Smart.House.Application.Services.Devices;
using Smart.House.Interface;
using Smart.House.Interface.Devices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smart.House.Grains.Devices.Notificator
{
    public class NotificatorDispatcher : IDispatcher<NotificatorState>
    {
        private readonly INotificatorService _service;

        public NotificatorDispatcher(INotificatorService service)
        {
            _service = service;
        }
        
        public async Task<NotificatorState> Dispatch(NotificatorState state)
        {
            ResetState(state);

            var emails = FetchEmails(state);
            var messages = FetchMessages(state);

            CompressEmails(emails, state);
            CompressMessages(messages, state);

            if (state.SmsToSend.Any() || state.EmailsToSend.Any())
                state.LastNotifyTime = DateTime.Now;

            return await Task.FromResult(state);
        }

        private void ResetState(NotificatorState state)
        {
            state.SmsToSend.Clear();
            state.EmailsToSend.Clear();

            if (state.LastNotifyTime.Hour != DateTime.Now.Hour)
            {
                state.SmsLimit = 0;
                state.EmailLimit = 0;
            }
        }

        private IEnumerable<EmailNotify> FetchEmails(NotificatorState state)
        {
            while (state.EmailQueue.TryDequeue(out EmailNotify notify))
            {
                var attachment = _service.PrepareEmail(
                    notify.Identifier, notify.Notifier, notify.Value);
                notify.Attachments.Add(attachment);

                yield return notify;
            }
        }

        private IEnumerable<TextNotify> FetchMessages(NotificatorState state)
        {
            while (state.SmsQueue.TryDequeue(out TextNotify notify))
            {
                yield return notify;
            }
        }

        private void CompressEmails(IEnumerable<EmailNotify> emails, NotificatorState state)
        {
            var emailsByType = emails.GroupBy(x => x.Event);

            foreach (var compressed in emailsByType)
            {
                var notify = compressed.First();

                compressed.Where(email => email.Value != notify.Value)
                    .Select(email =>
                    {
                        var attachments = email.Attachments;

                        if (attachments.Any())
                            notify.Attachments.AddRange(attachments);

                        return email;
                    });

                state.EmailLimit ++;
                state.EmailsToSend.Add(notify);
            }
        }

        private void CompressMessages(IEnumerable<TextNotify> messages, NotificatorState state)
        {
            var messagesByType = messages.GroupBy(x => x.Event);

            foreach (var compressed in messagesByType)
            {
                var notify = compressed.First();

                compressed.Where(message => message.Value != message.Value)
                    .Select(email =>
                    {
                        return email;
                    });

                state.SmsLimit ++;
                state.SmsToSend.Add(notify);
            }
        }
    }
}

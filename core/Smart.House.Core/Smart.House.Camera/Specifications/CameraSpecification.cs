using Smart.House.Domain.Entities;
using System;

namespace Smart.House.Camera.Specifications
{
    using Notification = Notification.Entities.Notification;
    using EventType = Notification.Entities.EventType;

    public class CameraSpecification
    {
        private readonly Entities.Camera _camera;

        public CameraSpecification(Entities.Camera camera)
        {
            _camera = camera;
        }

        public bool IsNotificable(Notification notification)
        {
            switch (notification.Type)
            {
                case EventType.MotionDetected:
                    {
                        if (_camera.IsMotionDetected)
                        {
                            var same = notification.Value == _camera.GetLastMotionFileName();

                            return (_camera.IsMotionDetected && !same)
                                || (_camera.IsMotionDetected && !notification.Unchecked);
                        }

                        return false;
                    }
                default:
                    return false;
            }
        }

        public bool IsInHarmonogram(Harmonogram harmonogram)
        {
            switch (harmonogram.Type)
            {
                case HarmonogramType.MotionDetection:
                    {
                        var now = DateTime.Now;
                        var activeDay = CompareDayFromHarmonogram(now.DayOfWeek, harmonogram);

                        var activeTime = now.TimeOfDay >= harmonogram.From 
                            && now.TimeOfDay <= harmonogram.To;

                        return activeDay && activeTime;
                    }
            }

            return false;
        }

        private bool CompareDayFromHarmonogram(DayOfWeek day, Harmonogram harmonogram)
        {
            switch (day)
            {
                case DayOfWeek.Monday:
                    return harmonogram.Monday;
                case DayOfWeek.Tuesday:
                    return harmonogram.Tuesday;
                case DayOfWeek.Wednesday:
                    return harmonogram.Wednesday;
                case DayOfWeek.Thursday:
                    return harmonogram.Thursday;
                case DayOfWeek.Friday:
                    return harmonogram.Friday;
                case DayOfWeek.Saturday:
                    return harmonogram.Saturday;
                case DayOfWeek.Sunday:
                    return harmonogram.Sunday;
                default:
                    return false;
            }
        }
    }
}

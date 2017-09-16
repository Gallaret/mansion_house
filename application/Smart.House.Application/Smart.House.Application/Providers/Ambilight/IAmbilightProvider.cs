﻿using Smart.House.Domain.Devices.Entities;
using System.Threading.Tasks;

namespace Smart.House.Application.Providers.Ambilight
{
    public interface IAmbilightProvider
    {
        Task RunAlarm(Device device);
    }
}

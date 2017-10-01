﻿using Smart.House.Application.Domain.Devices.Camera.Dtos;
using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices.Camera.Providers
{
    public interface IRecordingProvider
    {
        Task Start(string path, RecordingStream stream);

        Task Stop(string recorder);
    }
}

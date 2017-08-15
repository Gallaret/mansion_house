using Smart.House.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Smart.House.Domain.Repositories
{
    public interface IDeviceRepository<T> where T: Device
    {
        T Get(string identifier);
        void Add(T device);
    }
}

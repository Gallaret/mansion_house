using System;

namespace Smart.House.Domain.Devices.Entities
{
    public class User
    {
        public Guid Id;
        public string UserName, Password;

        public User(string login, string password)
        {
            Id = Guid.NewGuid();
            UserName = login;
            Password = password;
        }
    }
}

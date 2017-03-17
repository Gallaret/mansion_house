using System;

namespace Mansion.Core.User
{
    public class User
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public User(string login, string password)
        {
            Id = Guid.NewGuid();
            UserName = login;
            Password = password;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace Mansion.Core.User.Services
{
    public class UserService
    {
        public User CreateUser(string login, string password)
        {
            return new User(login, password);
        }
    }
}

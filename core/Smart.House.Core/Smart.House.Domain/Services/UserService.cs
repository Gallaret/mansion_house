namespace Smart.House.Domain.Services
{
    public class UserService
    {
        public User CreateUser(string login, string password)
        {
            return new User(login, password);
        }
    }
}

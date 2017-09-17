using Smart.House.Domain.Users.Entities;

namespace Smart.House.Application.Repositories.Users
{
    public interface IUserRepository
    {
        User Find(string identifier);
    }
}

using Smart.House.Domain.Users.Entities;

namespace Smart.House.Application.Domain.Users.Repositories
{
    public interface IUserRepository
    {
        User Find(string identifier);
    }
}

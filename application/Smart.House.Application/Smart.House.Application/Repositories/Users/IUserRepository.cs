using Smart.House.Domain.Users.Entities;
using System.Threading.Tasks;

namespace Smart.House.Application.Repositories.Users
{
    public interface IUserRepository
    {
        User Find(string identifier);
    }
}

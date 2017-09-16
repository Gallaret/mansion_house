using Smart.House.Application.Repositories.Users;
using Smart.House.Domain.Users.Entities;
using Smart.House.Data.Model;
using System.Threading.Tasks;

namespace Smart.House.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public User Find(string identifier)
        {
            return _context.Users.Find(identifier);
        }
    }
}

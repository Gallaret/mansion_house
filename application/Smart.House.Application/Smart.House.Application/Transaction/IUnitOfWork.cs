using System.Threading.Tasks;

namespace Smart.House.Application.Transaction
{
    public interface IUnitOfWork
    {
        Task<int> SaveChangesAsync();
    }
}

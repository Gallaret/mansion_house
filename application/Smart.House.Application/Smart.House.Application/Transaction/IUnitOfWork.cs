namespace Smart.House.Application.Transaction
{
    public interface IUnitOfWork
    {
        int SaveChanges();
    }
}

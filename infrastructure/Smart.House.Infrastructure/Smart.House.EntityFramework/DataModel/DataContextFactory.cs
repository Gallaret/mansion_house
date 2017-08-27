using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Smart.House.EntityFramework.DataModel
{
    public class DataContextFactory : IDesignTimeDbContextFactory<DataContext>
    {
        public DataContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<DataContext>();
            builder.UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=SmartHouse;Trusted_Connection=True;");
            return new DataContext(builder.Options, null);
        }
    }
}

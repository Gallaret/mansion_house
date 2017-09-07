namespace Smart.House.Read.Connection
{
    public class ReadConnection
    {
        public string ConnectionString { get; }

        public ReadConnection(string connectionString)
        {
            ConnectionString = connectionString;
        }
    }
}

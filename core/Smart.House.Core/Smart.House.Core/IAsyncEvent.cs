namespace Smart.House.Core
{
    public interface IAsyncEvent<T>
    {
        T Identifier { get; }
    }
}

namespace Smart.House.Application.Providers.Ambilight
{
    public interface IAmbilightProviderFactory
    {
        IAmbilightProvider Create(string provider);
    }
}

namespace Smart.House.Application.Providers
{
    public interface ICameraProviderFactory
    {
        ICameraProvider Create(string name);
    }
}

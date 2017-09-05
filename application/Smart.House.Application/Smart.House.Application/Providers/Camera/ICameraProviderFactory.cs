namespace Smart.House.Application.Providers.Camera
{
    public interface ICameraProviderFactory
    {
        ICameraProvider Create(string name);
    }
}

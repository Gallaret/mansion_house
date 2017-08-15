namespace Smart.House.Camera.Providers
{
    public interface ICameraProvider
    {
        bool DetectMotion(Entities.Camera camera, out string lastMotionFileName);
    }

    public interface ICameraProviderFactory
    {
        ICameraProvider Create(string name);
    }
}

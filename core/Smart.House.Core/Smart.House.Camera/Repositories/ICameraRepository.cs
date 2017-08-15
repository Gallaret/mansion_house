namespace Smart.House.Camera.Repositories
{
    public interface ICameraRepository
    {
        void Add(Entities.Camera camera);

        Entities.Camera Get(string identifier);
    }
}

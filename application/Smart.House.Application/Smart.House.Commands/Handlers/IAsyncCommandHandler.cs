using System.Threading.Tasks;

namespace Smart.House.Commands.Handlers
{
    public interface IAsyncCommandHandler<T> where T: ICommand
    {
        Task Execute(T command);
    }
}

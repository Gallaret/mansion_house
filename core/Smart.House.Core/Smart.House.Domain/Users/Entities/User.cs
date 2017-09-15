using Smart.House.Core;

namespace Smart.House.Domain.Users.Entities
{
    public class User : AggregateRoot<string>
    {
        private string _identifier;

        public override string Identifier => _identifier;
        public string Email { get; private set; } //Consider to use value type
        public string Mobile { get; private set; } //Consider to use Value type

        public User(string login)
        {
            _identifier = login;
        }
    }
}

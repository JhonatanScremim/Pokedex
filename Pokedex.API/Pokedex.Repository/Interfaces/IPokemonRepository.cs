using Pokedex.Domain;

namespace Pokedex.Repository.Interfaces
{
    public interface IPokemonRepository
    {
        Task<List<Pokemon>> GetAll();
        Task Insert(Pokemon pokemon);
    }
}
using Pokedex.Domain;

namespace Pokedex.Repository.Interfaces
{
    public interface IPokemonRepository
    {
        Task<List<Pokemon>> GetAll();
        Pokemon? GetById(string id);
        Task Insert(Pokemon pokemon);
    }
}
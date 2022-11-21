using Pokedex.Domain;

namespace Pokedex.Repository.Interfaces
{
    public interface IPokemonTypeRepository
    {
         Task<List<PokemonType>> GetAll();
    }
}
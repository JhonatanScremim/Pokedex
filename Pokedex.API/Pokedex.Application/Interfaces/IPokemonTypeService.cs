using Pokedex.Infra.ViewModels;

namespace Pokedex.Application.Interfaces
{
    public interface IPokemonTypeService
    {
         Task<List<PokemonTypeViewModel>> GetAll();
    }
}
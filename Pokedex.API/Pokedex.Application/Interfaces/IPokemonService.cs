using Pokedex.Infra.DTOs;
using Pokedex.Infra.ViewModels;

namespace Pokedex.Application.Interfaces
{
    public interface IPokemonService
    {
        Task<List<PokemonViewModel>> GetAll();
        Task Create(PokemonDTO dto);
    }
}
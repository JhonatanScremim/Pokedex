using Pokedex.Infra.DTOs;
using Pokedex.Infra.ViewModels;

namespace Pokedex.Application.Interfaces
{
    public interface IPokemonService
    {
        Task<List<PokemonViewModel>> GetAll();
        PokemonViewModel GetById(string id);
        Task Create(PokemonDTO dto);
        Task Delete(string id);
    }
}
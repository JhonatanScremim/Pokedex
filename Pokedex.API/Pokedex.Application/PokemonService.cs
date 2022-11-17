using AutoMapper;
using Pokedex.Application.Interfaces;
using Pokedex.Infra.ViewModels;
using Pokedex.Repository.Interfaces;

namespace Pokedex.Application
{
    public class PokemonService : IPokemonService
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IMapper _mapper;

        public PokemonService(IPokemonRepository pokemonRepository, IMapper mapper)
        {
            _pokemonRepository = pokemonRepository;
            _mapper = mapper;
        }

        public async Task<List<PokemonViewModel>> GetAll()
        {
            var pokemons = await _pokemonRepository.GetAll();
            Console.WriteLine(pokemons);
            return _mapper.Map<List<PokemonViewModel>>(pokemons);
        }
    }
}
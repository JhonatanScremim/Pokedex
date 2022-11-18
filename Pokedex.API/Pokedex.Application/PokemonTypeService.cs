using AutoMapper;
using Pokedex.Application.Interfaces;
using Pokedex.Infra.ViewModels;
using Pokedex.Repository.Interfaces;

namespace Pokedex.Application
{
    public class PokemonTypeService : IPokemonTypeService
    {
        private readonly IPokemonTypeRepository _pokemonTypeRepository;
        private readonly IMapper _mapper;

        public PokemonTypeService(IPokemonTypeRepository pokemonTypeRepository, IMapper mapper)
        {
            _pokemonTypeRepository = pokemonTypeRepository;
            _mapper = mapper;
        }

        public async Task<List<PokemonTypeViewModel>> GetAll()
        {
            var types = await _pokemonTypeRepository.GetAll();
            return _mapper.Map<List<PokemonTypeViewModel>>(types);
        }
    }
}
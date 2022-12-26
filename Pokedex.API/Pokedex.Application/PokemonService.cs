using AutoMapper;
using Microsoft.Extensions.Configuration;
using Pokedex.Application.Interfaces;
using Pokedex.Domain;
using Pokedex.Infra.DTOs;
using Pokedex.Infra.Interfaces;
using Pokedex.Infra.ViewModels;
using Pokedex.Repository.Interfaces;

namespace Pokedex.Application
{
    public class PokemonService : IPokemonService
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IFileUpload _fileUpload;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public PokemonService(IPokemonRepository pokemonRepository, IFileUpload fileUpload, IConfiguration configuration, IMapper mapper)
        {
            _pokemonRepository = pokemonRepository;
            _fileUpload = fileUpload;
            _configuration = configuration;
            _mapper = mapper;
        }

        public async Task<List<PokemonViewModel>> GetAll()
        {
            var pokemons = await _pokemonRepository.GetAll();
            return _mapper.Map<List<PokemonViewModel>>(pokemons);
        }
        
        public PokemonViewModel GetById(string id)
        {
            var pokemon = _pokemonRepository.GetById(id);
            return _mapper.Map<PokemonViewModel>(pokemon);
        }

        public async Task Create(PokemonDTO dto)
        {
            dto.ImageUrl = _fileUpload.UploadBase64Image(dto.ImageUrl, _configuration["AzureBlobStorage:Container"]);
            var pokemon = _mapper.Map<Pokemon>(dto);
            await _pokemonRepository.Insert(pokemon);
        }

        public async Task Delete(string id)
        {
            await _pokemonRepository.Delete(id);
        }
    }
}
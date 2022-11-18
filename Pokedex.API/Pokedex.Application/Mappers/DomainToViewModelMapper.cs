using AutoMapper;
using Pokedex.Domain;
using Pokedex.Infra.ViewModels;

namespace Pokedex.Infra.Mappers
{
    public class DomainToViewModelMapper : Profile
    {
        public DomainToViewModelMapper()
        {
            CreateMap<Pokemon, PokemonViewModel>();
            CreateMap<PokemonType, PokemonTypeViewModel>();
        }
    }
}
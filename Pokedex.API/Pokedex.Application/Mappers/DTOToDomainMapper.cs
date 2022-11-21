using AutoMapper;
using Pokedex.Domain;
using Pokedex.Infra.DTOs;

namespace Pokedex.Application.Mappers
{
    public class DTOToDomainMapper : Profile
    {
        public DTOToDomainMapper()
        {
            CreateMap<PokemonDTO, Pokemon>();
        }
    }
}
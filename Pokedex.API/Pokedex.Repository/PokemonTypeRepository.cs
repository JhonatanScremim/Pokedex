using MongoDB.Driver;
using Pokedex.Domain;
using Pokedex.Repository.Config;
using Pokedex.Repository.Interfaces;

namespace Pokedex.Repository
{
    public class PokemonTypeRepository : IPokemonTypeRepository
    {
        IMongoCollection<PokemonType> _pokemonType;

        public PokemonTypeRepository(DataConfig config)
        {
            _pokemonType = config.database.GetCollection<PokemonType>("PokemonType");
        }

        public async Task<List<PokemonType>> GetAll()
        {
            return await _pokemonType.AsQueryable().ToListAsync();
        }
    }
}
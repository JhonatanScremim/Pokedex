using MongoDB.Driver;
using Pokedex.Domain;
using Pokedex.Repository.Config;
using Pokedex.Repository.Interfaces;

namespace Pokedex.Repository
{
    public class PokemonRepository : IPokemonRepository
    {
        IMongoCollection<Pokemon> _pokemon;

        public PokemonRepository(DataConfig config)
        {
            _pokemon = config.database.GetCollection<Pokemon>("Pokemon");
        }

        public async Task<List<Pokemon>> GetAll()
        {
            return await _pokemon.AsQueryable().ToListAsync();
        }

        public async Task Insert(Pokemon pokemon)
        {
            await _pokemon.InsertOneAsync(pokemon);
        }
    }
}
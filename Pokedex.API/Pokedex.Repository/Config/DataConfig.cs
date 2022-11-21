using Microsoft.Extensions.Configuration;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using Pokedex.Domain;

namespace Pokedex.Repository.Config
{
    public class DataConfig
    {
        public IMongoDatabase database { get; }

        public DataConfig(IConfiguration config)
        {
            try
            {
                var settings = MongoClientSettings.FromUrl(
                    new MongoUrl(config["DbConnectionConfig:ConnectionString"]));
                var client = new MongoClient(settings);
                database = client.GetDatabase(config["DbConnectionConfig:Database"]);
                MapClasses();
            }
            catch (Exception e)
            {
                throw new Exception("Não foi possivel se conectar com o banco:", e);
            }
        }

        public void MapClasses()
        {
            if (!BsonClassMap.IsClassMapRegistered(typeof(Pokemon)))
            {
                BsonClassMap.RegisterClassMap<Pokemon>(i =>
                {
                    i.AutoMap();
                    i.MapIdMember(x => x.Id);
                    i.SetIgnoreExtraElements(true);
                });
            }

            if (!BsonClassMap.IsClassMapRegistered(typeof(PokemonType)))
            {
                BsonClassMap.RegisterClassMap<PokemonType>(i =>
                {
                    i.AutoMap();
                    i.MapIdMember(x => x.Id);
                    i.SetIgnoreExtraElements(true);
                });
            }
        }
    }
}
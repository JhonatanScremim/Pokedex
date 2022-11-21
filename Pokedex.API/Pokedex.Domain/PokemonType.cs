using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Pokedex.Domain
{
    public class PokemonType
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }

        public PokemonType(string id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
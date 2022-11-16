using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Pokedex.Domain
{
    public class Types
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }

        public Types(string id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
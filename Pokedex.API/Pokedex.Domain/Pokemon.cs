using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Pokedex.Domain
{
    public class Pokemon
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public List<Types> Types { get; set; }

        public Pokemon(string id, string name, string imageUrl, List<Types> types)
        {
            Id = id;
            Name = name;
            ImageUrl = imageUrl;
            Types = types;
        }
    }
}
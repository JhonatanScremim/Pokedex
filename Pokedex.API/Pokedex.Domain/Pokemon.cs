using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Pokedex.Domain
{
    public class Pokemon
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = "";
        public string Name { get; set; } = "";
        public string ImageUrl { get; set; } = "";
        public List<string> Types { get; set; } = new List<string>();
        public int Hp { get; set; }
        public int Attack { get; set; }
        public int Defense { get; set; }
        public int SpecialAttack { get; set; }
        public int SpecialDefense { get; set; }
        public int Speed { get; set; }
    }
}
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
        public List<PokemonType> Types { get; set; }
        public int Hp { get; set; }
        public int Attack { get; set; }
        public int Defense { get; set; }
        public int SpecialAttack { get; set; }
        public int SpecialDefense { get; set; }
        public int Speed { get; set; }

        public Pokemon(string id, string name, string imageUrl, List<PokemonType> types, int hp, int attack, int defense, int specialAttack, int specialDefense, int speed)
        {
            Id = id;
            Name = name;
            ImageUrl = imageUrl;
            Types = types;
            Hp = hp;
            Attack = attack;
            Defense = defense;
            SpecialAttack = specialAttack;
            SpecialDefense = specialDefense;
            Speed = speed;
        }
    }
}
namespace Pokedex.Infra.DTOs
{
    public class PokemonDTO
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public List<string> Types { get; set; }
        public int Hp { get; set; }
        public int Attack { get; set; }
        public int Defense { get; set; }
        public int SpecialAttack { get; set; }
        public int SpecialDefense { get; set; }
        public int Speed { get; set; }

        public PokemonDTO(string name, string imageUrl, List<string> types, int hp, int attack, int defense, int specialAttack, int specialDefense, int speed)
        {
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
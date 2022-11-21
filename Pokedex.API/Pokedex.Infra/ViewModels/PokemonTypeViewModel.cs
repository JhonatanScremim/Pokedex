namespace Pokedex.Infra.ViewModels
{
    public class PokemonTypeViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public PokemonTypeViewModel(string id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
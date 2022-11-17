namespace Pokedex.Infra.ViewModels
{
    public class PokemonViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public List<TypesViewModel> Types { get; set; }

        public PokemonViewModel(string id, string name, string imageUrl, List<TypesViewModel> types)
        {
            Id = id;
            Name = name;
            ImageUrl = imageUrl;
            Types = types;
        }
    }
}
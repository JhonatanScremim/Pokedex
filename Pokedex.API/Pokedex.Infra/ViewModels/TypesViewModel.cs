namespace Pokedex.Infra.ViewModels
{
    public class TypesViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public TypesViewModel(string id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
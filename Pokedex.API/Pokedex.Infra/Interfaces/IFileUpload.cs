namespace Pokedex.Infra.Interfaces
{
    public interface IFileUpload
    {
        string UploadBase64Image(string base64Image, string container);
    }
}
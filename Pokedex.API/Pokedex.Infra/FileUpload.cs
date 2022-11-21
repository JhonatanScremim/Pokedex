using System.Text.RegularExpressions;
using Azure.Storage.Blobs;
using Microsoft.Extensions.Configuration;
using Pokedex.Infra.Interfaces;

namespace Pokedex.Infra
{
    public class FileUpload : IFileUpload
    {
        private readonly IConfiguration _configuration;

        public FileUpload(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string UploadBase64Image(string base64Image, string container)
        {
            // Gera um nome randomico para a imagem
            var fileName = Guid.NewGuid().ToString() + ".jpg";
            
            // Limpa o Hash enviado
            var data = new Regex(@"^data:image\/[a-z]+;base64,").Replace(base64Image, "");

            // Gera um array de bytes
            byte[] imageBytes = Convert.FromBase64String(data);

            // Define o BLOB no qual a imagem será armazenada
            var blobClient = new BlobClient(_configuration["AzureBlobStorage:ConnectionString"], container, fileName);

            // Envia a imagem
            using (var stream = new MemoryStream(imageBytes))
            {
                blobClient.Upload(stream);
            }

            return blobClient.Uri.AbsoluteUri;
        }
    }
}
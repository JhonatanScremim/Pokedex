using Microsoft.AspNetCore.Mvc;
using Pokedex.Application.Interfaces;

namespace Pokedex.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PokemonController : ControllerBase
    {
        private readonly IPokemonService _pokemonService;

        public PokemonController(IPokemonService pokemonService)
        {
            _pokemonService = pokemonService;
        }

        [HttpGet("")]
        public async Task<ActionResult> GetAll()
        {
            try
            {
                return Ok(await _pokemonService.GetAll());
            }
            catch(Exception e)
            {
                return BadRequest("Error: " + e);
            }
        }
    }
}
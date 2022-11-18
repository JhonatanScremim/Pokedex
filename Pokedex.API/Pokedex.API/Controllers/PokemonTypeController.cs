using Microsoft.AspNetCore.Mvc;
using Pokedex.Application.Interfaces;

namespace Pokedex.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PokemonTypeController : ControllerBase
    {
        private readonly IPokemonTypeService _pokemonTypeService;

        public PokemonTypeController(IPokemonTypeService pokemonTypeService)
        {
            _pokemonTypeService = pokemonTypeService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                return Ok(await _pokemonTypeService.GetAll());
            }
            catch(Exception e)
            {
                return BadRequest("Error: " + e);
            }
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Pokedex.Application.Interfaces;
using Pokedex.Infra.DTOs;

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

        [HttpGet("{id}")]
        public ActionResult GetById(string id)
        {
            try
            {
                return Ok(_pokemonService.GetById(id));
            }
            catch(Exception e)
            {
                return BadRequest("Error: " + e);
            }
        }

        [HttpPost("")]
        public async Task<ActionResult> Create(PokemonDTO dto)
        {
            try
            {
                await _pokemonService.Create(dto);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest("Error: " + e);
            }
        }
    }
}
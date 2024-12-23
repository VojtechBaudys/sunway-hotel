using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Hotels : ControllerBase
    {
        private readonly Loader _loader;

        public Hotels()
        {
            _loader = new Loader();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Hotel>> GetHotels()
        {
            var hotels = _loader.GetHotels();
            if (hotels == null)
            {
                return NotFound("Unable to load hotels data");
            }
            return Ok(hotels);
        }

        [HttpGet("{id}")]
        public ActionResult<Hotel> GetHotel(string id)
        {
            if (!int.TryParse(id, out int hotelId))
            {
                return BadRequest($"Invalid ID format: {id}. ID must be an integer.");
            }

            var hotels = _loader.GetHotels();
            if (hotels == null)
            {
                return NotFound("Unable to load hotels data");
            }

            var hotel = hotels.FirstOrDefault(h => h.Id == int.Parse(id));
            if (hotel == null)
            {
                return NotFound($"Hotel with ID {id} not found");
            }

            return Ok(hotel);
        }
    }
}

using FaithBibleInternationalChurchBackend.Handlers;
using FaithBibleInternationalChurchBackend.RequestObjects;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FaithBibleInternationalChurchBackend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CommunicationController : ControllerBase
    {
        private readonly IControllerHandlers<ContactFormRequest> _communicationHandler;

        public CommunicationController(IControllerHandlers<ContactFormRequest> communicationHandler)
        {
            _communicationHandler = communicationHandler;
        }

        [HttpPost]
        [Route("SendEmailContactForm")]
        public async Task<IActionResult> SendEmailContactForm([FromBody] ContactFormRequest communicationRequest)
        {
            var response = await _communicationHandler.Handle(communicationRequest);

            return Ok(response);
        }
    }
}
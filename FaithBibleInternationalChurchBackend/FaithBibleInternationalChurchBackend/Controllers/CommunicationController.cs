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
        private readonly IControllerHandlers<CommunicationRequest> _communicationHandler;

        public CommunicationController(IControllerHandlers<CommunicationRequest> communicationHandler)
        {
            _communicationHandler = communicationHandler;
        }

        [HttpPost]
        [Route("SendEmail")]
        public async Task<IActionResult> SendEmailAsync([FromBody] CommunicationRequest communicationRequest)
        {
            var response = await _communicationHandler.Handle(communicationRequest);

            return Ok(response);
        }
    }
}
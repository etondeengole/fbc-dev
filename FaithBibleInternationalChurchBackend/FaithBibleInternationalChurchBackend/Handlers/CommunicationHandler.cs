using FaithBibleInternationalChurchBackend.RequestObjects;
using FaithBibleInternationalChurchBackend.Services;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;

namespace FaithBibleInternationalChurchBackend.Handlers
{
    public class CommunicationHandler : HandlerBase<ContactFormRequest>
    {
        private readonly EmailService _emailService;

        public CommunicationHandler(IOptions<SmtpOptions> smtpOptions)
        {
            _emailService = new EmailService(smtp: smtpOptions.Value);
        }

        public override async Task<object> Handle(ContactFormRequest request)
        {
            _emailService.Send(to: request.Email, subject: request.Subject, body: request.Message);

            return true;
        }
    }
}
using API.Options;
using API.RequestObjects;
using API.Services;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Handler
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

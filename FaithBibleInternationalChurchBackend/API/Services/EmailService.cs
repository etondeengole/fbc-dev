using API.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace API.Services
{
    public class EmailService
    {
        private SmtpOptions smtp;
        private readonly MailAddress _fromAddress;
        private readonly SmtpClient _smtpClient;

        public EmailService(SmtpOptions smtp)
        {
            this.smtp = smtp;
            _fromAddress = new MailAddress(smtp.Username, smtp.FromName);
            _smtpClient = new SmtpClient()
            {
                Host = smtp.Host,
                Port = smtp.Port,
                EnableSsl = smtp.Ssl,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(smtp.Username, smtp.Password)
            };

        }

        internal void Send(string to, string subject, string body)
        {
#if DEBUG
            to = "user_1@localhost";
#endif
            try
            {
                using (var message = new MailMessage(_fromAddress, new MailAddress(to)) { Subject = subject, Body = body })
                {
                    _smtpClient.Send(message);
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}

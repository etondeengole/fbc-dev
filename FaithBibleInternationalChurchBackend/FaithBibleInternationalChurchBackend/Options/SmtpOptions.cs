﻿namespace FaithBibleInternationalChurchBackend.Services
{
    public class SmtpOptions
    {
        public string Host { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FromName { get; set; }
        public int Port { get; set; }
        public bool Ssl { get; set; }
    }
}
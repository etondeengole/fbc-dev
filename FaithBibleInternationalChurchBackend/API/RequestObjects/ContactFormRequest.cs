namespace API.RequestObjects
{
    public class ContactFormRequest
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Subject { get; set; }

        public string Gender { get; set; }

        public string Message { get; set; }
    }
}
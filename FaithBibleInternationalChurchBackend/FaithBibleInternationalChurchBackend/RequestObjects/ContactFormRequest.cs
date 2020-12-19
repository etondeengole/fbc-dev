using Newtonsoft.Json;

namespace FaithBibleInternationalChurchBackend.RequestObjects
{
    public class ContactFormRequest
    {
        [JsonProperty("firstName")]
        public string FirstName { get; set; }

        [JsonProperty("lastName")]
        public string LastName { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("subject")]
        public string Subject { get; set; }

        [JsonProperty("gender")]
        public string Gender { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }
    }
}
export class ContactForm {
    FirstName: string;
    LastName: string;
    Email: string;
    Subject: string;
    Gender: string;
    Message: string;

    constructor(fname?: string, lname?: string, email?: string, subject?: string, msg?:string, gender?: string ) {
        this.FirstName = fname;
        this.LastName = lname;
        this.Email = email;
        this.Subject = subject;
        this.Message = msg;
        this.Gender = gender;        
    }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from 'src/app/Models/ContactForm';
import { SendEmailService } from 'src/app/Services/send-email-service.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('f') contactForm: NgForm;
  genders: string[] = ['male', 'female'];
  contactInformation: ContactForm = new ContactForm();

  constructor(private emailService: SendEmailService) { }

  ngOnInit() {
  }

  onSubmit() {   
    this.contactInformation.FirstName = this.contactForm.value.name;
    this.contactInformation.LastName = this.contactForm.value.surname;
    this.contactInformation.Email = this.contactForm.value.email;
    this.contactInformation.Subject = this.contactForm.value.subject;
    this.contactInformation.Gender = this.contactForm.value.gender;
    this.contactInformation.Message = this.contactForm.value.message;

    let response: any;

    this.emailService.SendContactForm(this.contactInformation)
      .subscribe(resp => {
        response = resp;
      });

    this.contactForm.reset();    
  }

}

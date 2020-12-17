import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('f', { static: false }) contactForm: NgForm;
  genders: string[] = ['male', 'female'];
  contactInformation: any = {
    FirstName: '',
    LastName: '',
    Email: '',
    Subject: '',
    Gender: '',
    Message: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.contactForm);
    this.contactInformation.FirstName = this.contactForm.value.name;
    this.contactInformation.LastName = this.contactForm.value.surname;
    this.contactInformation.Email = this.contactForm.value.email;
    this.contactInformation.Subject = this.contactForm.value.subject;
    this.contactInformation.Gender = this.contactForm.value.gender;
    this.contactInformation.Message = this.contactForm.value.message;
    this.contactForm.reset();    
  }

}

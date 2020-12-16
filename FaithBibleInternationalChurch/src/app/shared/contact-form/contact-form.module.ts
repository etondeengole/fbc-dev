import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    FormsModule,
    BrowserModule
  ],
  bootstrap: [ContactFormComponent]
})
export class ContactFormModule { }

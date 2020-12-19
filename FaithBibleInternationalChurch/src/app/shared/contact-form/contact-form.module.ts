import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SendEmailService } from '../../Services/send-email-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from 'src/app/Models/HttpErrorInterceptor';



@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [
    ContactFormComponent
  ],
  providers: [
    SendEmailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class ContactFormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFooterComponent } from './site-footer.component';
import { ContactFormModule } from '../contact-form/contact-form.module';



@NgModule({
  declarations: [SiteFooterComponent],
  imports: [
    CommonModule,
    ContactFormModule
  ]
})
export class SiteFooterModule { }

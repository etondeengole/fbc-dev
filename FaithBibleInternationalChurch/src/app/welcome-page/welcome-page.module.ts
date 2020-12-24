import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page.component';
import { BannerComponent } from './banner/banner.component';
import { SiteFooterModule } from '../shared/site-footer/site-footer.module';



@NgModule({
  declarations: [
    WelcomePageComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    SiteFooterModule
  ]
})
export class WelcomePageModule { }
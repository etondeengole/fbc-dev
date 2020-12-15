import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    WelcomePageComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WelcomePageModule { }
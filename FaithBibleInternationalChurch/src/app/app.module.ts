import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { CountdownTimerComponent } from './shared/countdown-timer/countdown-timer.component';
import { CountdownTimerModule } from 'angular-countdown-timer';
import { WelcomePageModule } from './welcome-page/welcome-page.module';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    LiveStreamComponent,
    EventsCalendarComponent,
    CountdownTimerComponent,
    SiteFooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CountdownTimerModule.forRoot(),
    WelcomePageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

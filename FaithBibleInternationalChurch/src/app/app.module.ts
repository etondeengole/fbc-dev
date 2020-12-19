import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { WelcomePageModule } from './welcome-page/welcome-page.module';
import { FormsModule } from '@angular/forms';
import { SiteFooterModule } from './shared/site-footer/site-footer.module';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    LiveStreamComponent,
    EventsCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WelcomePageModule,
    FormsModule,
    SiteFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

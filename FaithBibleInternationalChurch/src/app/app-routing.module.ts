import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  { path: 'Home', component: WelcomePageComponent },
  { path: 'events', component: EventsCalendarComponent },
  { path: 'stream', component: LiveStreamComponent },
  { path: '', redirectTo: "/", pathMatch: 'full' },
  //{ path: '',   redirectTo: '/Home', pathMatch: 'full' }, // redirect to `Home page`
  { path: '**', component: WelcomePageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

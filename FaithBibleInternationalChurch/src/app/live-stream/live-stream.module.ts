import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, 
    EmbedVideo.forRoot()
  ]
})
export class LiveStreamModule { }

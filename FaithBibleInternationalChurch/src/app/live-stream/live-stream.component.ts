
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent {
  youtubeUrl = 'https://www.youtube.com/embed/Py2q1zabMu8';

  
 
  youtubeId = 'Py2q1zabMu8';

  
  constructor(private embedService: EmbedVideoService) {
    console.log(this.embedService.embed(this.youtubeUrl));
 
    console.log(this.embedService.embed_youtube(this.youtubeId));
   }

  

}


import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {
  youtubeUrl: string = 'https://www.youtube.com/embed/Py2q1zabMu8';
  youtubeChannelId: string = "UCbTnAG-4nCDE7SnS-FcpblQ";
  youtubeBaseUrl: string = "https://www.youtube.com/embed/live_stream?channel=";
  
  constructor(private embedService: EmbedVideoService) {

   }
  ngOnInit(): void {
    this.youtubeBaseUrl = this.youtubeBaseUrl + this.youtubeChannelId;
    console.log(this.youtubeBaseUrl);
  }

  

}

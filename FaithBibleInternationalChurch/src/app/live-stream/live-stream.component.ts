
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {
  youtubeUrl; //: string = 'https://www.youtube.com/embed/Py2q1zabMu8';
  //youtubeChannelId: string = "UCbTnAG-4nCDE7SnS-FcpblQ";
  //youtubeBaseUrl: string = "https://www.youtube.com/embed/live_stream?autoplay=1&channel=";
  
  constructor(private embedService: EmbedVideoService,  private sanitizer:DomSanitizer) {
    //this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc)
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/live_stream?autoplay=1&channel=UCbTnAG-4nCDE7SnS-FcpblQ")

   }
  ngOnInit(): void {
    
  }

  

}

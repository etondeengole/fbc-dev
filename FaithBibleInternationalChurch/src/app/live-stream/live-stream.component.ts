
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {
  facebookLiveUrl: string;
  
  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document) {
   }

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    //s.onload = this.loadNextScript.bind(this);
    s.type = 'text/javascript';
    s.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0';
    s.text = ``;
    s.nonce = 'Q1TlCqmo';
    s.crossorigin = 'anonymous';
    this.renderer2.appendChild(this._document.body, s);
    this.facebookLiveUrl = "https://www.facebook.com/faithbiblechurchsa/live/";
  }

  loadNextScript() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
 }

}

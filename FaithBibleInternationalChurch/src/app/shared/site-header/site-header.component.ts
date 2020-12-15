import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-dark'); //add class on scroll
      element.classList.remove('on-load');
    } 
    else 
    {
      element.classList.remove('bg-dark'); //when page is just loaded
      element.classList.add('on-load');
    }
  }

}

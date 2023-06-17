import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  Home = 'Home';
  AboutMe = 'AboutMe';
  Article = 'Article';
  Contact = 'Contact';


  constructor(private router : Router,
              private scroller : ViewportScroller) { }

  ngOnInit(): void {
  }

  
  toggleDarkMode(): void{
    document.body.classList.toggle('dark-theme');
  }

  move(url: string): void {
    switch (true) {
      case url === 'Home' :
        this.scroller.scrollToPosition([0,0])
        break;
      case url === 'AboutMe' :
        this.scroller.scrollToPosition([0,800])
        break;
      case url === 'Article' :
        this.scroller.scrollToPosition([0,1800])
        break;
        case url === 'Contact' :
          this.scroller.scrollToPosition([0,2500])
          break;
      default:
        break;
    }
    console.log(this.scroller.getScrollPosition())
    this.scroller.scrollToAnchor(url)
  }
}

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
    home = 'Home';
    aboutMe = 'AboutMe';
    techno = 'Techno';
    article = 'Article';
    contact = 'Contact';
    competence = 'Competence'

    constructor(private router : Router,
                private scroller : ViewportScroller) { }

    ngOnInit(): void {
    }

    

    move(url: string): void {
      switch (true) {
        case url === 'Home' :
          this.scroller.scrollToPosition([0,0])
          break;
        case url === 'AboutMe' :
          this.scroller.scrollToPosition([0,800])
          break;
        case url === 'Techno' :
          this.scroller.scrollToPosition([0,2200])
          break;
        case url === 'Article' :
          this.scroller.scrollToPosition([0,2800])
          break;
          case url === 'Competence' :
            this.scroller.scrollToPosition([0,3400])
            break;
          case url === 'Contact' :
            this.scroller.scrollToPosition([0,4300])
            break;
        default:
          break;
      }
      console.log(this.scroller.getScrollPosition())
      this.scroller.scrollToAnchor(url)
    }
  }

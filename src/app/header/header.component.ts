import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  Home = 'Home';
  AboutMe = 'AboutMe';
  Article = 'Article'


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  
  toggleDarkMode(): void{
    document.body.classList.toggle('dark-theme');
  }

  move(url: string): void {
    console.log(url)
    this.router.navigate([url])
  }
}

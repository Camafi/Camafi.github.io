import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  JPO : boolean = false;
  Bros : boolean = false;
  Sang : boolean = false;
  Frontend : boolean = false;
  Migration : boolean = false;
  Ionic : boolean = false
  Autonomie : boolean = false;
  Equipe : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  JPOModal(modal : boolean) {
    this.JPO = !modal
  }
  BrosModal(modal : boolean) {
    this.Bros = !modal
  }
  SangModal(modal : boolean) {
    this.Sang = !modal
  }
  FrontendModal(modal : boolean) {
    this.Frontend = !modal
  }
  MigrationModal(modal : boolean) {
    this.Migration = !modal
  }
  IonicModal(modal : boolean) {
    this.Ionic = !modal
  }
  AutonomieModal(modal : boolean) {
    this.Autonomie = !modal
  }
  EquipeModal(modal : boolean) {
    this.Equipe = !modal
  }

}

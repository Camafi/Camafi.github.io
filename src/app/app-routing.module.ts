import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
{ path: 'AboutMe', component: AboutMeComponent },
{ path: 'Article', component: ArticleComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

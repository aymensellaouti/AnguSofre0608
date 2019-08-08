import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {AppComponent} from './app.component';
import {ListeTodoComponent} from './Todo/liste-todo/liste-todo.component';
import {FirstComponent} from './first/first.component';
import {DetailCvComponent} from './cv/detail-cv/detail-cv.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: 'detail/:id', component: DetailCvComponent},
      {path: 'add', component: AddPersonneComponent}
    ]},
  {path: '', component: CvComponent},
  {path: 'todo', component: ListeTodoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'color/:couleur', component: FirstComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {AppComponent} from './app.component';
import {ListeTodoComponent} from './Todo/liste-todo/liste-todo.component';
import {FirstComponent} from './first/first.component';

const routes: Routes = [
  {path: 'cv', children: [
    ]},
  {path: '', component: CvComponent},
  {path: 'todo', component: ListeTodoComponent},
  {path: 'color/:couleur', component: FirstComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

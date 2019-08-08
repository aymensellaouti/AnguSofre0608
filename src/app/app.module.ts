import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { BindingComponent } from './binding/binding.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './cv/item/item.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListeComponent } from './cv/liste/liste.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgstyleComponent } from './directive/ngstyle/ngstyle.component';
import { WordComponent } from './directive/word/word.component';
import { NgclassComponent } from './directive/ngclass/ngclass.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { ListeTodoComponent } from './Todo/liste-todo/liste-todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    BindingComponent,
    CardComponent,
    ItemComponent,
    CvComponent,
    ListeComponent,
    DetailComponent,
    NgstyleComponent,
    WordComponent,
    NgclassComponent,
    HighlightDirective,
    DefaultImagePipe,
    ListeTodoComponent,
    EmbaucheComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

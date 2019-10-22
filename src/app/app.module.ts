import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { YoutubersService } from './youtubers.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MonComposantComponent ],
  bootstrap:    [ AppComponent ],
  providers: [YoutubersService]
})
export class AppModule { }

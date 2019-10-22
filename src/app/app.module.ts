import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { YoutubersService } from './youtubers.service';
import { AddYoutuberComponent } from './add-youtuber/add-youtuber.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, RouterModule.forRoot([
 { path: '', component: AppComponent },
 { path: 'youtubers', component: MonComposantComponent },
 { path: 'add-youtuber', component: AddYoutuberComponent },
 { path: '**', redirectTo: '', pathMatch: 'full' },
 ])
 ],
  declarations: [ AppComponent, HelloComponent, MonComposantComponent, AddYoutuberComponent ],
  bootstrap:    [ AppComponent ],
  providers: [YoutubersService]
})
export class AppModule { }

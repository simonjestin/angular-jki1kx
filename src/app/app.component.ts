import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  phrase(param = 'yoyo')
  { 
    return param + ' est le meilleur Youtuber !'
  }

  onNotify() 
  {
    console.log('Youtuber liker !');
  }
}

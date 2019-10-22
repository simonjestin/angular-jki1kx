import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YoutubersService } from '../youtubers.service';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent implements OnInit {
  @Input() id;
  @Output() notify = new EventEmitter();
    
  youtubers;

  constructor(private youtubersService: YoutubersService) {
    this.youtubers = youtubersService.GetYoutubers();
   }

  ngOnInit() {
  }

  like(id) 
  {
    for(let youtuber of this.youtubers)
    {
      if (youtuber.id == id)
      {
        console.log(youtuber.name + ' liker !');
      }
    }
  }
}
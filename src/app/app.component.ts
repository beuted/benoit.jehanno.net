import { Component } from '@angular/core';
import { TextCarouselComponent } from './text-carousel/text-carousel.component';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private likedStuff = [
    'Nethack', 'UnNethack', 'New Techs', 'Reddit', '🌽', '🍣', '🍺', 'ES6', 'Typescript', 'Nodejs', 'C#', 'Java' 'Esport', 'Hiking', '🏔 Mountains',
    'Hackernews', 'Coding games', 'Coding small projects', '🕹 Indie games', 'All sorts of musics', '🎲 Board games'
  ];
  public likedStuffSuffled = _.sampleSize(this.likedStuff, this.likedStuff.length);
  
  constructor() {
  }

}

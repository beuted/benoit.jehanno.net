import { Component } from '@angular/core';
import { TextCarouselComponent } from './text-carousel/text-carousel.component';
import { MasonryOptions } from 'angular2-masonry';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private likedStuff = [
    'Nethack', 'UnNethack', 'New Techs', 'Reddit', '🌽', '🍣', '🍺', 'ES6', 'Typescript', 'Nodejs', 'C#', 'Java', 'Esport', 'Hiking', '🏔 Mountains',
    'Hackernews', 'Coding games', 'Coding small projects', '🕹 Indie games', 'All sorts of musics', '🎲 Board games'
  ];
  public likedStuffSuffled = _.sampleSize(this.likedStuff, this.likedStuff.length);

  public myOptions: MasonryOptions = {
    transitionDuration: '0.8s'
  };

  public bricks = [
     {
        title: 'JS RPG',
        github: 'https://github.com/beuted/JS-RPG',
        demo: 'https://js-rpg.herokuapp.com/index.html',
        image: './assets/images/projects/js-rpg.PNG',
        height: 300,
        date: '2011'
     },
     {
        title: 'WEBGL FPS',
        github: 'https://github.com/beuted/WebGL-FPS',
        demo: 'https://webgl-fps.herokuapp.com/src/index.html',
        image: './assets/images/projects/webgl-fps.PNG',
        height: 300,
        date: '2012'
     },
     {
        title: 'smoothycon',
        github: 'https://github.com/beuted/smoothycon',
        demo: 'https://smoothycon.herokuapp.com/demo.html',
        image: './assets/images/projects/smoothycon.PNG',
        height: 300,
        date: 'March 2015'
     },
     {
        title: 'ng-chocolat',
        github: 'https://github.com/beuted/ng-chocolat',
        image: './assets/images/projects/ng-chocolat.PNG',
        height: 300,
        date: 'September 2015'
     },
     {
        title: 'csgo-mates.com',
        github: 'http://csgo-mates.com',
        image: './assets/images/projects/csgo-mates.PNG',
        height: 500,
        date: '2013-2014'
     },
   ];
  
  constructor() {
  }

}

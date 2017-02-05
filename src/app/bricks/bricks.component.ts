import { Component, Input, OnInit } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'bricks',
  templateUrl: './bricks.component.html',
  styleUrls: ['./bricks.component.css']
})
export class BricksComponent implements OnInit {

  public myOptions: MasonryOptions = { 
    transitionDuration: '0.8s' 
  };

  @Input()
  public bricks: { title: string, github: string, demo: string, image: string, height: number, date: string } [];

  constructor() { }

  ngOnInit() {
  }

}

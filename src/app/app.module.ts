import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasonryModule } from 'angular2-masonry';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { TextCarouselComponent } from './text-carousel/text-carousel.component';
import { BricksComponent } from './bricks/bricks.component';

@NgModule({
  declarations: [
    AppComponent,
    TextCarouselComponent,
    BricksComponent
  ],
  imports: [
    NgbModule.forRoot(),
    MasonryModule,
    Ng2PageScrollModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

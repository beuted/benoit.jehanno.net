import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'text-carousel',
  template:
`
<div class="text-carousel">
  <ngb-carousel>
    <template ngbSlide *ngFor='let word of words'>
      <div class="carousel-content">
        {{word}}
      </div>
    </template>
  </ngb-carousel>
</div>
`,
  styles: [`
.text-carousel {
  display: inline-flex;
}
* >>> .carousel .carousel-control-next, * >>> .carousel .carousel-control-prev, * >>> .carousel .carousel-indicators {
  display: none;
}`
  ],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class TextCarouselComponent {
  @Input()
  public words: string[];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.keyboard = false;
  }
}
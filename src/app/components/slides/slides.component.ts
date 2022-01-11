import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  
  @ViewChild(IonSlides) slides: IonSlides;
      slideOpts = {
        initialSlide: 0,
        speed: 400
      };
  constructor() { }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
  }

}

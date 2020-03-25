import { Component, OnInit } from '@angular/core';

import { faCode, faBold, faPlayCircle,faSlidersH, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {faWpforms, faCss3, faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './fixed.css']
})
export class HomeComponent implements OnInit {

  faPlayCircle: any;
  faCode: any;
  faQuoteLeft: any;
  faBold: any;
  faCss3: any;
  faSlidersH: any;
  faWpforms: any;
  faFacebook: any;
  faInstagram: any;
  faYoutube: any;
  constructor() { }

  ngOnInit(): void {
    this.faPlayCircle = faPlayCircle;
    this.faSlidersH = faSlidersH;
    this.faWpforms = faWpforms;
    this.faCode = faCode;
    this.faBold = faBold;
    this.faCss3 = faCss3;
    this.faQuoteLeft = faQuoteLeft;
    this.faFacebook = faFacebook;
    this.faInstagram = faInstagram;
    this.faYoutube = faYoutube;
  }

}

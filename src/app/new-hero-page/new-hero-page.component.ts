import { Component } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styleUrls: ['./new-hero-page.component.css']
})
export class NewHeroPageComponent {
newHero:Hero = new Hero(null, null);
}

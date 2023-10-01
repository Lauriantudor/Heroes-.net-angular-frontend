import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent {
@Input()
hero:Hero= new Hero(null, null);
}

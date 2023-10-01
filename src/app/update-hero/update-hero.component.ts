import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent {
updateHero:Hero|null = null;
constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService){}

ngOnInit() {
  var heroId = this.activatedRoute.snapshot.params['id'];
  this.heroService.getHero(heroId).subscribe(data => {
    this.updateHero=data as Hero;
    console.log(data);
  });
  
}



}

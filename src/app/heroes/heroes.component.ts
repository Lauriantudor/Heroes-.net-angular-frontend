import { Component } from '@angular/core';
import { Hero } from '../models/hero'; 
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
heroes: Hero[]=[];


  constructor(private heroService: HeroService, private router: Router){}
 ngOnInit(){
  this.getHeroes();
 }

  getHeroes(){
    this.heroService.getHeroes().subscribe(data=>{
      this.heroes = data as Hero[];
    }, err=>{
      console.log(err)
    });
  }
  goToHero(hero:Hero){
    this.router.navigate(['/view-hero/'+hero.id])
  }
}

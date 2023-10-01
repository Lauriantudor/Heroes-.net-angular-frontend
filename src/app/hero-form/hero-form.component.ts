import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
@Input()
hero: Hero = new Hero(null, null);
constructor(private heroService: HeroService, private router: Router){}
heroForm: FormGroup = new FormGroup({
  nameInput: new FormControl()
})
ngOnInit() {
  this.heroForm= new FormGroup({
    nameInput: new FormControl(this.hero.name)
  });
  console.log(this.heroForm.value.name);
}

saveOrUpdateHero(){
  this.populateHeroFromForm();
  if(this.hero.id == null){
    this.heroService.saveHero(this.hero).subscribe(data=>{
      this.router.navigate(['/heroes'])
    }, err=>console.log(this.hero))
  }if(this.hero.id != null){
    this.heroService.updateHero(this.hero.id, this.hero).subscribe(data=>{
      this.router.navigate(['/heroes'])
    }, err=>console.log(err))
  }

}
populateHeroFromForm(){
    this.hero.name = this.heroForm.value.nameInput;
}
}

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../models/hero';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

hero:Hero= new Hero(null,null);
updateHeroUrl:string = '';
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private heroService: HeroService,
  private location: Location,
  private dialog: MatDialog
) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.updateHeroUrl="/update-hero/"+ id;
    this.getHero();
  }
  getHero(){
    const id = this.route.snapshot.params['id'];
    this.heroService.getHero(id).subscribe(data => {
      this.hero = data as Hero;
    })
  }
  goBack(){
    this.location.back();
  }
  openConfirmationDialog(){
    var dialogRef = this.dialog.open(ConfirmationDialogComponent)
    dialogRef.componentInstance.actionConfirmedEvent.subscribe(
      actionConfirmed => {
        if(actionConfirmed == true) {
          this.deleteHero(this.hero.id)
        }})
  }
  deleteHero(id:any){
    this.heroService.deleteHero(id).subscribe(data => {
      this.router.navigate(['/heroes']);
    },err => console.log(err));  
  }
}

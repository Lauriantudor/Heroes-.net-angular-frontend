import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NewHeroPageComponent } from './new-hero-page/new-hero-page.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard',component: DashboardComponent},
  {path:'view-hero/:id', component: HeroDetailComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'new-hero', component: NewHeroPageComponent},
  {path: 'update-hero/:id', component: UpdateHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

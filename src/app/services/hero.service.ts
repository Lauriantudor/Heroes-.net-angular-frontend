import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
    baseUrl = "https://localhost:7231/api/Hero"
  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHeroes():Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.httpClient.get<Hero[]>(`${this.baseUrl}`);
  }
  getHero(id: number): Observable<Hero>{
   
    this.messageService.add('HeroService: fetched hero id=${id}');
    return this.httpClient.get<Hero>(`${this.baseUrl}/${id}`);
  }
  saveHero(hero: Hero): Observable<Hero>{
    this.messageService.add('Hero is adding');
    return this.httpClient.post<Hero>(`${this.baseUrl}`,hero);
  }
  updateHero(id: number, hero: Hero): Observable<Hero>{
    return this.httpClient.put<Hero>(`${this.baseUrl}/${id}`, hero);
  }
  deleteHero(heroId: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${heroId}`)
  }

}

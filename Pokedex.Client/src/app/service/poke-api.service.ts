import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";

  constructor(private httClient: HttpClient) { }

  get getAllPokemon(): Observable<any>{
    return this.httClient.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        console.log(res)
      })
    );
  }
}

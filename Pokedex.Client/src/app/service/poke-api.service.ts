import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';

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
        res.results.map((x: any) => {
          this.getApiPokemon(x.url).subscribe(
            res => x.status = res
          )
        })
      })
    );
  }

  public getApiPokemon(url: string): Observable<any>{
    return this.httClient.get<any>(url).pipe(
      map(res => res)
    )
  }
}
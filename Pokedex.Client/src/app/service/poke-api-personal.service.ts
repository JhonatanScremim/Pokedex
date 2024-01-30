import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, tap, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PokeApiPersonalService {
  private url = "https://localhost:7029/api/v1/";

  constructor(private httClient: HttpClient) { }

  public getAllPokemon(): Observable<any>{
    return this.httClient.get<any>(`${this.url}Pokemon`).pipe(
      map(res => res)
    )
  }

  public getPokemonById(id: string){
    return this.httClient.get<any>(`${this.url}Pokemon/${id}`).pipe(
      map(res => res)
    )
  }

  public getPokemonType(){
    return this.httClient.get<any>(`${this.url}PokemonType`).pipe(
      map(res => res)
    )
  }

  public savePokemon(pokemon: any){
    return this.httClient.post(`${this.url}Pokemon`, pokemon, {responseType: 'text'});
  }

  public deletePokemon(id: string){
    return this.httClient.delete(`${this.url}Pokemon/${id}`);
  }
}

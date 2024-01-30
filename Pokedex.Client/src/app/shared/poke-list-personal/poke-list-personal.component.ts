import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokeApiPersonalService } from 'src/app/service/poke-api-personal.service';

@Component({
  selector: 'app-poke-list-personal',
  templateUrl: './poke-list-personal.component.html',
  styleUrls: ['./poke-list-personal.component.scss']
})
export class PokeListPersonalComponent implements OnInit {

  public allPokemons: any;

  constructor(
    private pokeApiPersonalService: PokeApiPersonalService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(){
    this.pokeApiPersonalService.getAllPokemon().subscribe(
      res => {
        this.allPokemons = res;
      }
    )
  }

  public deletePokemon(id: string){
    this.pokeApiPersonalService.deletePokemon(id).subscribe(
      res => res
    )
  }

}

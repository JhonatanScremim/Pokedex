import { Component, OnInit } from '@angular/core';
import PokemonDTO from 'src/app/models/pokemonDTO';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public allRightPokemons: Array<PokemonDTO> = new Array<PokemonDTO>();
  public allPokemons: any;
  private setAllPokemons: any;
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.getAllPokemon.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.allPokemons = this.setAllPokemons;
        console.log(this.allPokemons);
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public searchList(value: string){
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.allPokemons = filter;
  }

}

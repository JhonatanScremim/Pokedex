import { Component, OnInit } from '@angular/core';
import { PokeApiPersonalService } from 'src/app/service/poke-api-personal.service';

@Component({
  selector: 'app-new-pokemon-personal',
  templateUrl: './new-pokemon-personal.component.html',
  styleUrls: ['./new-pokemon-personal.component.scss']
})
export class NewPokemonPersonalComponent implements OnInit {

  public typesPokemon: any;
  public isLoading: boolean = false;

  constructor(private pokeApiPersonalService: PokeApiPersonalService) { }

  ngOnInit(): void {
    this.getPokemonType();
  }

  public getPokemonType(){
    this.typesPokemon = this.pokeApiPersonalService.getPokemonType().subscribe(
      res => {
        this.typesPokemon = res;
        this.isLoading = true;
        console.log(this.typesPokemon);
      }
    )
  }

}

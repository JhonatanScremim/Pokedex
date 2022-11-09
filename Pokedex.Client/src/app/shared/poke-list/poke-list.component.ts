import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public allPokemons: any;
  private setAllPokemons: any;
  public apiError: boolean = false;
  public idPokemon = 0;

  //pagination
  page = 0;
  totalPokemons: number = 0;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(){
    let offset = (this.page === 0 || this.page === 1) ? 0 : (this.page * 10) - 10 ;
    this.pokeApiService.getAllPokemon(10, offset).subscribe(
      res => {
        this.totalPokemons = res.count;
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

  public getImagePokemon(id: number){
    return this.pokeApiService.getImagePokemon(id);
  }
}

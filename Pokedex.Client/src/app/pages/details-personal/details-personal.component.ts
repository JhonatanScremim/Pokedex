import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiPersonalService } from 'src/app/service/poke-api-personal.service';

@Component({
  selector: 'app-details-personal',
  templateUrl: './details-personal.component.html',
  styleUrls: ['./details-personal.component.scss']
})
export class DetailsPersonalComponent implements OnInit {

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiPersonalService: PokeApiPersonalService ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.pokeApiPersonalService.getPokemonById(id).subscribe(
      res => (
        this.pokemon = res,
        this.isLoading = true
      ),
      error => {
        this.apiError = true
      }
    );
  }

}

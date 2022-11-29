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

  public inputFileChange(event: any){
    console.log(event);
    if(event.srcElement.files && event.srcElement.files[0]){
      const photo = event.srcElement.files[0];

      let input = document.getElementById('image-text');
      if (input != null){
        input.innerHTML = photo.name;
      }

      const fileReader = new FileReader();
      fileReader.onload = function(){
        let image = document.getElementById('image-poke') as HTMLImageElement;
        if(image != null)
          image.src = <string>fileReader.result;
      }
      fileReader.readAsDataURL(photo);

    }
  }

}

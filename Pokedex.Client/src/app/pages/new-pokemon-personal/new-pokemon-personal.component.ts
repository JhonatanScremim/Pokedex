import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { PokeApiPersonalService } from 'src/app/service/poke-api-personal.service';

@Component({
  selector: 'app-new-pokemon-personal',
  templateUrl: './new-pokemon-personal.component.html',
  styleUrls: ['./new-pokemon-personal.component.scss']
})
export class NewPokemonPersonalComponent implements OnInit {

  public modalSuccess: boolean = false;

  public typesPokemon: any;
  public dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'name',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  public isLoading: boolean = false;

  constructor(private pokeApiPersonalService: PokeApiPersonalService) { }

  ngOnInit(): void {
    this.modalSuccess = false;
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

  onItemSelect(item: any) {
    console.log(item.name);
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
        if(image != null){
          image.src = <string>fileReader.result;
        }
      }
      fileReader.readAsDataURL(photo);
    }
  }

  public savePokemon(frm: NgForm){

    if(frm.valid){
      let types = [];
      for(let i = 0; i < frm.value.types.length; i++){
        types.push(frm.value.types[i].name);
      }
      frm.value.types = types

      let image = document.getElementById('image-poke') as HTMLImageElement;
      frm.value.imageUrl = image.src
      console.log(frm.value);

      this.pokeApiPersonalService.savePokemon(frm.value).subscribe(
        res => {
          console.log(res);
          this.modalSuccess = true;
        },
        error => {
          alert('Erro');
        }
      );
    }
  }
}

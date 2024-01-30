import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {

  @Output() toggleClicked = new EventEmitter();
  @Input() public toggleButton: boolean = true;

  public officialPokedex: boolean = true;
  public personalPokedex: boolean = false;
  public isDisabledOfficial: boolean = true;
  public isDisabledPersonal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changePersonalPokedex(){
    if(this.isDisabledPersonal){
      return;
    }
    this.isDisabledPersonal = true;
    this.isDisabledOfficial = false;
    this.personalPokedex = true;
    this.toggleClicked.emit(this.personalPokedex);
  }

  public changeOfficialPokedex(){
    if(this.isDisabledOfficial){
      return;
    }
    this.isDisabledPersonal = false;
    this.isDisabledOfficial = true;
    this.personalPokedex = false;
    this.toggleClicked.emit(this.personalPokedex);
  }

}

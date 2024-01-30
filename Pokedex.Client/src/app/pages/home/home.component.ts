import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public personalPokedex: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleClicked(event: any){
    this.personalPokedex = event;
  }

}

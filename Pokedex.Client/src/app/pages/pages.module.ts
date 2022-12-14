import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

//Router
import { RouterModule } from '@angular/router';
import { DetailsPersonalComponent } from './details-personal/details-personal.component';
import { NewPokemonPersonalComponent } from './new-pokemon-personal/new-pokemon-personal.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    DetailsPersonalComponent,
    NewPokemonPersonalComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    RouterModule,
    SharedModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ]
})
export class PagesModule { }

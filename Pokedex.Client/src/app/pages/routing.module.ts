import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPersonalComponent } from './details-personal/details-personal.component';

//Components
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NewPokemonPersonalComponent } from './new-pokemon-personal/new-pokemon-personal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'details-personal/:id',
    component: DetailsPersonalComponent
  },
  {
    path: 'new-pokemon-personal',
    component: NewPokemonPersonalComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

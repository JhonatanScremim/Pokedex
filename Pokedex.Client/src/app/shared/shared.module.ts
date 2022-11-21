import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

//Routes
import { RouterModule } from '@angular/router';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokeListPersonalComponent } from './poke-list-personal/poke-list-personal.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeListPersonalComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeListPersonalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    MatButtonToggleModule
  ]
})
export class SharedModule { }

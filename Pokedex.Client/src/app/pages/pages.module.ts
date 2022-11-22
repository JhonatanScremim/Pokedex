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


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    DetailsPersonalComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }

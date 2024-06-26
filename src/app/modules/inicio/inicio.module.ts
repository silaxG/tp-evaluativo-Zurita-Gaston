import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
//componentes locales
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { GridsComponent } from './components/grids/grids.component';
//importacion de componentes de material
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    InicioComponent,
    CarrouselComponent,
    GridsComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatGridListModule
  ],
  exports:[
    MatGridListModule
  ]
})
export class InicioModule { }

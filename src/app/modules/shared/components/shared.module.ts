import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
//importacion de la funcion de enrutamiento de angular
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule

  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
//importacion de la funcion de enrutamiento de angular
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    AppRoutingModule

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    AppRoutingModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {  AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports:[
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class AutentificacionModule { }

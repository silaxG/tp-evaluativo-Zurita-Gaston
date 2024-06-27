import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    AngularFireAuth,
    AngularFirestore
  ],
  exports:[
    AngularFireAuth,
    AngularFirestore
  ]
})
export class AutentificacionModule { }

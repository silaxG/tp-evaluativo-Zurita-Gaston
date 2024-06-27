import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { OpcionesusuarioComponent } from './pages/opcionesusuario/opcionesusuario.component';
import { OpcionesadminComponent } from './pages/opcionesadmin/opcionesadmin.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    LoginComponent,
    OpcionesusuarioComponent,
    OpcionesadminComponent
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

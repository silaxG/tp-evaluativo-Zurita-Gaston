import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//modulo que define el modulo raiz
import { AppRoutingModule } from './app-routing.module';
//importacion de base de datos
import { enviroment } from './enviroments/enviroment';
import {AngularFireModule} from '@angular/fire/compat'; //trabaja con las colecciones de la informacion
import {AngularFireAuthModule} from '@angular/fire/compat/auth'; //trabaja con la autentificacion
import {AngularFireStorageModule} from '@angular/fire/compat/storage' //trabaja con imagenes y archivos
//importancion de componentes globales
import { SharedModule } from './modules/shared/components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //vinculacion del proyecto con firebase
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

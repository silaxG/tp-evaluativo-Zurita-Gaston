import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //haciendo inicio.module como una ruta padre
  {path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  //haciendo del modulo de autentificacion como una ruta padre
  {path:"",loadChildren:()=>import("./modules/autentificacion/autentificacion.module").then(m=>m.AutentificacionModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

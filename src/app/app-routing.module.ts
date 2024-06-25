import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //haciendo inicio.module como una ruta padre
  {path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

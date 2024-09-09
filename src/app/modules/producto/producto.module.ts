import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { CardComponent } from './components/card/card.component';


// COMPONENTES LOCALES


@NgModule({
  declarations: [
    ProductoComponent,
    CardComponent


  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    CardComponent



  ]
})
export class ProductoModule { }

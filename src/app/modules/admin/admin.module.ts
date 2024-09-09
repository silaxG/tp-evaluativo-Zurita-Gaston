import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './pages/admin/admin.component';
import { TablaComponent } from './components/tabla/tabla.component';

// Paqueterías para formularios y formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes de material
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
AdminComponent,
TablaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    AdminComponent,
    TablaComponent
  ]
})
export class AdminModule { }

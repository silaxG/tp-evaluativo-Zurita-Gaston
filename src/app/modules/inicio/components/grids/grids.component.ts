import { Component } from '@angular/core';
//importacion de la interfaz de
import { Tile } from 'src/models/grid';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent {
  tiles = [
    //la primera foto tendra un parallax
    { text: '', cols: 4, rows: 4, color: '', imageUrl: '', class: 'parallax' },
    { text: 'Amigurumis recien fabricados para su venta', cols: 2, rows: 2, imageUrl: '', class: 'solido' },
    { text: '', cols: 2, rows: 2, imageUrl: '/assets/inicio1.jpeg', class: 'meow' },
    { text: 'Four', cols: 4, rows: 4, imageUrl: '', class: '' },
  ];
  
}

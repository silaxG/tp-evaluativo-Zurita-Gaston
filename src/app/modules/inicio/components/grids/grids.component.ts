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
    { text: 'Paraiso amigurumi', cols: 4, rows: 1, imageUrl: '', class: 'title' },
    { text: 'Amigurumis recien fabricados\n para su venta', cols: 2, rows: 4, imageUrl: '', class: 'solido' },
    { text: '', cols: 2, rows: 4, imageUrl: '/assets/carousel1.jpeg', class: '' },
    { text: '', cols: 4, rows: 4, color: '', imageUrl: '', class: 'parallax' },

    { text: 'falta imagen', cols: 1, rows: 2, imageUrl: '/assets/carousel2.jpeg', class: 'meow' },
    { text: 'falta imagen', cols: 1, rows: 2, imageUrl: '/assets/carousel3.jpeg', class: 'meow' },
    { text: 'falta imagen', cols: 1, rows: 2, imageUrl: '', class: 'meow' },
    { text: 'falta imagen', cols: 1, rows: 2, imageUrl: '', class: 'meow' },
  ];
  
}

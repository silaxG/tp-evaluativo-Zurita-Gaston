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
    { text: 'Amigurumis recien fabricados\n para su venta', cols: 4, rows: 1, imageUrl: '', class: 'solido' },
    { text: '', cols: 4, rows: 4, imageUrl: '', class: 'parallax' },
    { text: 'Explore ahora nuestro catalogo', cols: 4, rows: 2, imageUrl: '', class: 'title', link:'/producto' },
    { text: '', cols: 4, rows: 4, imageUrl: '/assets/carousel1.jpeg', class: 'meow' , link:'/producto' },
    { text: '', cols: 1, rows: 2, imageUrl: '/assets/carousel2.jpeg', class: 'meow' , link:'/producto' },
    { text: '', cols: 1, rows: 2, imageUrl: '/assets/carousel4.jpeg', class: 'meow', link:'/producto' },
    { text: '', cols: 1, rows: 2, imageUrl: '/assets/carousel3.jpeg', class: 'meow', link:'/producto' },
    { text: '', cols: 1, rows: 2, imageUrl: '/assets/carousel5.jpeg', class: 'meow', link:'/producto' },
    // Otros tiles...
  ];
  
}

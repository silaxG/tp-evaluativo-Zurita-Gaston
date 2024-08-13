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
    { text: '', cols: 2, rows: 2, color: 'lightblue', imageUrl: '' },
    { text: 'Two', cols: 2, rows: 2, color: 'lightgreen', imageUrl: '' },
    { text: 'Three', cols: 4, rows: 4, color: '', imageUrl: '/assets/wallhaven.jpg' },
    { text: 'Four', cols: 4, rows: 4, color: '#DDBDF1', imageUrl: '' },
  ];
}

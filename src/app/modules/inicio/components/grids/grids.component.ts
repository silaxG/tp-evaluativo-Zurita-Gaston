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
    { text: 'One', cols: 3, rows: 1, color: 'lightblue', imageUrl: '' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen', imageUrl: '' },
    { text: 'Three', cols: 1, rows: 1, color: '', imageUrl: 'path/to/image3.jpg' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', imageUrl: '' },
  ];
}

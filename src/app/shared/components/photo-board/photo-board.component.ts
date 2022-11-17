import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IPhoto } from '../../interfaces/photo.model';

@Component({
  selector: 'app-photo-board',
  templateUrl: 'photo-board.component.html',
  styleUrls: ['photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnInit, OnChanges {
  @Input() public photos: IPhoto[];
  public rows: any[][] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  ngOnInit() {}

  private groupColumns(photos: IPhoto[]): any[][] {
    const newRows = [];
    const step = 4;
    for (let index = 0; index < photos.length; index += step) {
      newRows.push(photos.slice(index, index + step));
    }
    return newRows;
  }
}

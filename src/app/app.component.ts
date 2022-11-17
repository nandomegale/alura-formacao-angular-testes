import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoBoardService } from './shared/components/photo-board/photo-board.service';
import { IPhoto } from './shared/interfaces/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular testing';
  public photos$: Observable<IPhoto[]>;

  constructor(private service: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}

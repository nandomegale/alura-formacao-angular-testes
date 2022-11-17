import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/photo-board.service';
import { IPhoto } from 'src/app/shared/interfaces/photo.model';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public photos$: Observable<IPhoto[]>;
    public fa = {
        faCircleNotch
    }
  constructor(private service: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}

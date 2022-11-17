import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPhoto } from '../../interfaces/photo.model';
import { buildPhotoList } from '../../test/build-photo-list';
import { PhotoBoardService } from './photo-board.service';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<IPhoto[]> {
    return of(buildPhotoList());
  }
}

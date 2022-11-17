import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IPhoto } from '../../interfaces/photo.model';

@Injectable()
export class PhotoBoardService {
  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<IPhoto[]> {
    return this.http
      .get<IPhoto[]>('http://localhost:3000/photos')
      .pipe(
        map((photos: IPhoto[]) => {
          return photos.map((photo) => {
            return { ...photo, description: photo.description.toUpperCase() };
          });
        })
      )
      .pipe(delay(2000));
  }
}

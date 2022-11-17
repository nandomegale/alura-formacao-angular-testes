import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoBoardModule } from 'src/app/shared/components/photo-board/photo-board.module';

import { PhotoListComponent } from './photo-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, PhotoBoardModule],
  exports: [PhotoListComponent],
  declarations: [PhotoListComponent],
  providers: [],
})
export class PhotoListModule {}

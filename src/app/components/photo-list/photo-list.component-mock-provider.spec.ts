import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardMockService } from 'src/app/shared/components/photo-board/photo-board-mock.service';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/photo-board.service';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        // {
        //   provide: PhotoBoardService,
        //   useValue: {
        //     getPhotos(): Observable<IPhoto[]> {
        //       return of(buildPhotoList());
        //     },
        //   },
        // },
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('(D) should display board when data arrives', () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('should display board').not.toBeNull();
    expect(loader).withContext('should not display loader').toBeNull();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;
  //let originalTimeout;

  beforeEach(async () => {
    // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    await TestBed.configureTestingModule({
      /*
      /*ABORTAGEM PARA TEST FIRST
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule]
      */
      imports: [LikeWidgetModule],
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID when during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  /* MANEIRA UM
  it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger emission when called`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      expect(true).toBe(true);
      done();
    });
    component.like();
  });
  */

  it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

  //para evento de click()
  it('(D) should display number of likes when clicked', (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const countElement: HTMLElement =
        fixture.nativeElement.querySelector('.like-counter');
      expect(countElement.textContent.trim()).toBe('1');
      done();
    });
    const likeWidgetContainerElement = (HTMLElement =
      fixture.nativeElement.querySelector('.like-widget-container'));
    likeWidgetContainerElement.click();
  });

  //criando evento de pressionar ENTER
  it('(D) should display number of likes when ENTER key is pressed', (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterElement: HTMLElement =
        fixture.nativeElement.querySelector('.like-counter');
      expect(counterElement.textContent.trim()).toBe('1');
      done();
    });
    const likeWidgetContainerElement = (HTMLElement =
      fixture.nativeElement.querySelector('.like-widget-container'));
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    likeWidgetContainerElement.dispatchEvent(event);
  });
});

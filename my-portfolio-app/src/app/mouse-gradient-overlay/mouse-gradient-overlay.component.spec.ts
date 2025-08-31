import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseGradientOverlayComponent } from './mouse-gradient-overlay.component';

describe('MouseGradientOverlayComponent', () => {
  let component: MouseGradientOverlayComponent;
  let fixture: ComponentFixture<MouseGradientOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseGradientOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseGradientOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

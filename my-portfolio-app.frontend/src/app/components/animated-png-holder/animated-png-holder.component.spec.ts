import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedPngHolderComponent } from './animated-png-holder.component';

describe('AnimatedPngHolderComponent', () => {
  let component: AnimatedPngHolderComponent;
  let fixture: ComponentFixture<AnimatedPngHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedPngHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedPngHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

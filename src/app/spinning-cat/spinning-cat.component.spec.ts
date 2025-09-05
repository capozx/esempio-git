import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningCatComponent } from './spinning-cat.component';

describe('SpinningCatComponent', () => {
  let component: SpinningCatComponent;
  let fixture: ComponentFixture<SpinningCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinningCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinningCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

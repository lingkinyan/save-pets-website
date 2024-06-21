import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRightCardComponent } from './left-right-card.component';

describe('LeftRightCardComponent', () => {
  let component: LeftRightCardComponent;
  let fixture: ComponentFixture<LeftRightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftRightCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftRightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

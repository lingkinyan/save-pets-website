import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportUsLandingComponent } from './support-us-landing.component';

describe('SupportUsLandingComponent', () => {
  let component: SupportUsLandingComponent;
  let fixture: ComponentFixture<SupportUsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportUsLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportUsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

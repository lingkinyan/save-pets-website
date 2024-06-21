import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptLandingComponent } from './adopt-landing.component';

describe('AdoptLandingComponent', () => {
  let component: AdoptLandingComponent;
  let fixture: ComponentFixture<AdoptLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

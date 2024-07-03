import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionApplicationFormComponent } from './adoption-application-form.component';

describe('AdoptionApplicationFormComponent', () => {
  let component: AdoptionApplicationFormComponent;
  let fixture: ComponentFixture<AdoptionApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionApplicationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPhotoFrameComponent } from './team-photo-frame.component';

describe('TeamPhotoFrameComponent', () => {
  let component: TeamPhotoFrameComponent;
  let fixture: ComponentFixture<TeamPhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPhotoFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamPhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteCardComponent } from './white-card.component';

describe('WhiteCardComponent', () => {
  let component: WhiteCardComponent;
  let fixture: ComponentFixture<WhiteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

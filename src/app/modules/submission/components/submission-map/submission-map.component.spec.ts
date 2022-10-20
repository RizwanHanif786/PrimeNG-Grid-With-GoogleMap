import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionMapComponent } from './submission-map.component';

describe('SubmissionMapComponent', () => {
  let component: SubmissionMapComponent;
  let fixture: ComponentFixture<SubmissionMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPredictionPageComponent } from './our-prediction-page.component';

describe('OurPredictionPageComponent', () => {
  let component: OurPredictionPageComponent;
  let fixture: ComponentFixture<OurPredictionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPredictionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPredictionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

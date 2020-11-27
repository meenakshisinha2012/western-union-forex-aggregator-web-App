import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxProfileComponent } from './fx-profile.component';

describe('FxProfileComponent', () => {
  let component: FxProfileComponent;
  let fixture: ComponentFixture<FxProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxDashboardComponent } from './fx-dashboard.component';

describe('FxDashboardComponent', () => {
  let component: FxDashboardComponent;
  let fixture: ComponentFixture<FxDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

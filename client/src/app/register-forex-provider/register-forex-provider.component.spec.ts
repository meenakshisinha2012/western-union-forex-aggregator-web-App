import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForexProviderComponent } from './register-forex-provider.component';

describe('RegisterForexProviderComponent', () => {
  let component: RegisterForexProviderComponent;
  let fixture: ComponentFixture<RegisterForexProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterForexProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterForexProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

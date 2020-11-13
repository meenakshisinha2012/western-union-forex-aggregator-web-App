import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForexProviderComponent } from './login-forex-provider.component';

describe('LoginForexProviderComponent', () => {
  let component: LoginForexProviderComponent;
  let fixture: ComponentFixture<LoginForexProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginForexProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForexProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

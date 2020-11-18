import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexProviderListComponent } from './forex-provider-list.component';

describe('ForexProviderListComponent', () => {
  let component: ForexProviderListComponent;
  let fixture: ComponentFixture<ForexProviderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexProviderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

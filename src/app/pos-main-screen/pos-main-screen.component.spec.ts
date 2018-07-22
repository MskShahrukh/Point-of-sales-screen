import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSMainScreenComponent } from './pos-main-screen.component';

describe('POSMainScreenComponent', () => {
  let component: POSMainScreenComponent;
  let fixture: ComponentFixture<POSMainScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSMainScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

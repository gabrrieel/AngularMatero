import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroExemploComponent } from './outro-exemplo.component';

describe('OutroExemploComponent', () => {
  let component: OutroExemploComponent;
  let fixture: ComponentFixture<OutroExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutroExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutroExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

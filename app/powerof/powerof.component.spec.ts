import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerofComponent } from './powerof.component';

describe('PowerofComponent', () => {
  let component: PowerofComponent;
  let fixture: ComponentFixture<PowerofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

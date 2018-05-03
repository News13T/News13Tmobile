import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercesComponent } from './commerces.component';

describe('CommercesComponent', () => {
  let component: CommercesComponent;
  let fixture: ComponentFixture<CommercesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

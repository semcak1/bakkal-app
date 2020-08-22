import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakiyeComponent } from './bakiye.component';

describe('BakiyeComponent', () => {
  let component: BakiyeComponent;
  let fixture: ComponentFixture<BakiyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakiyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakiyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

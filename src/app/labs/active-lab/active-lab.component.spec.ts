import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLabComponent } from './active-lab.component';

describe('ActiveLabComponent', () => {
  let component: ActiveLabComponent;
  let fixture: ComponentFixture<ActiveLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

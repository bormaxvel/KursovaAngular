import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLabComponent } from './menu-lab.component';

describe('MenuLabComponent', () => {
  let component: MenuLabComponent;
  let fixture: ComponentFixture<MenuLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

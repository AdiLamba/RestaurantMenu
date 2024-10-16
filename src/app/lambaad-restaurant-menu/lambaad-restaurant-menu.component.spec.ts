import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambaadRestaurantMenuComponent } from './lambaad-restaurant-menu.component';

describe('LambaadRestaurantMenuComponent', () => {
  let component: LambaadRestaurantMenuComponent;
  let fixture: ComponentFixture<LambaadRestaurantMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LambaadRestaurantMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LambaadRestaurantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambaadMenuOptionsComponent } from './lambaad-menu-options.component';

describe('LambaadMenuOptionsComponent', () => {
  let component: LambaadMenuOptionsComponent;
  let fixture: ComponentFixture<LambaadMenuOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LambaadMenuOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LambaadMenuOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

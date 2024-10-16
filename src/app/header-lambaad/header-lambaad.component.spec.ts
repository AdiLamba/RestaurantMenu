import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLambaadComponent } from './header-lambaad.component';

describe('HeaderLambaadComponent', () => {
  let component: HeaderLambaadComponent;
  let fixture: ComponentFixture<HeaderLambaadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderLambaadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderLambaadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

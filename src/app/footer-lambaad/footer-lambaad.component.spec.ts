import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLambaadComponent } from './footer-lambaad.component';

describe('FooterLambaadComponent', () => {
  let component: FooterLambaadComponent;
  let fixture: ComponentFixture<FooterLambaadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterLambaadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterLambaadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

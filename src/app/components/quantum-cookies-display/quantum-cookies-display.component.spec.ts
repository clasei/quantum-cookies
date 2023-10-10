import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumCookiesDisplayComponent } from './quantum-cookies-display.component';

describe('QuantumCookiesDisplayComponent', () => {
  let component: QuantumCookiesDisplayComponent;
  let fixture: ComponentFixture<QuantumCookiesDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuantumCookiesDisplayComponent]
    });
    fixture = TestBed.createComponent(QuantumCookiesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

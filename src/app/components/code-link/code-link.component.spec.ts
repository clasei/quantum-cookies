import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLinkComponent } from './code-link.component';

describe('CodeLinkComponent', () => {
  let component: CodeLinkComponent;
  let fixture: ComponentFixture<CodeLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeLinkComponent]
    });
    fixture = TestBed.createComponent(CodeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

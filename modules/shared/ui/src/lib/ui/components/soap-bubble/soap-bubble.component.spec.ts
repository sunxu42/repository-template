import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapBubbleComponent } from './soap-bubble.component';

describe('SoapBubbleComponent', () => {
  let component: SoapBubbleComponent;
  let fixture: ComponentFixture<SoapBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SoapBubbleComponent]
    });
    fixture = TestBed.createComponent(SoapBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

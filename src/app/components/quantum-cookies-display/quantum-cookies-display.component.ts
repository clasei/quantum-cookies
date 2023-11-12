import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantum-cookies-display',
  templateUrl: './quantum-cookies-display.component.html',
  styleUrls: ['./quantum-cookies-display.component.scss']
})
export class QuantumCookiesDisplayComponent {
  @Input() quote: string = '';
  @Output() resetEvent = new EventEmitter<void>();
  
  onReset() {
    this.quote = '';
    this.resetEvent.emit();
  }
}

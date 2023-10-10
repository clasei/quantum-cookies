import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quantumCookies';
  currentQuote: string = '';

  handleNewQuote(quote: string): void {
    this.currentQuote = quote;
  }
}
import { Component, ViewChild } from '@angular/core';
import { UserInputComponent } from './components/user-input/user-input.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quantumCookies';
  currentQuote: string = '';
  quoteGenerated: boolean = false;
  @ViewChild(UserInputComponent) userInputComponent!: UserInputComponent;


  handleNewQuote(quote: string): void {
    this.currentQuote = quote;
    this.quoteGenerated = true;
  }

  handleReset() {
    this.currentQuote = '';
    this.quoteGenerated = false;
    if (this.userInputComponent) {
      this.userInputComponent.resetInput();
    }
  }

  resetQuoteGeneration(): void {
    this.currentQuote = '';
    this.quoteGenerated = false;
  }
}
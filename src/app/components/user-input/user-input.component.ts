import { Component, OnInit } from '@angular/core';
import { FeynmanSaysService } from '../../feynman-says.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})

export class UserInputComponent implements OnInit {
  userInput = '';
  isMaxCharsReached = false;
  isInputValid = false;

  constructor(private feynmanSaysService: FeynmanSaysService) {}

  ngOnInit(): void {
    this.validateInput();
  }

  adjustTextarea(event: Event): void {
    const textarea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  checkMaxLength(event: Event): void {
    this.userInput = (event.target as HTMLTextAreaElement).value;
    this.validateInput();
  }  
  
  generateFeynmanQuote(): void {
    this.feynmanSaysService.getRandomQuote().subscribe(
      quote => {
        console.log(quote);
        // [TODO] adjust the displayed quote (UI)
      },
      error => {
        console.error('Error fetching quote', error);
        // [TODO] adjust the displayed errors (UI)
      }
    );
  }

  private validateInput(): void {
    this.isMaxCharsReached = this.userInput.length >= 420;
    this.isInputValid = this.userInput.length > 0 && !this.isMaxCharsReached;
  }
}


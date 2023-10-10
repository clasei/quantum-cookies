import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  userInput = '';
  isMaxCharsReached = false;

  adjustTextarea(event: Event): void {
    let textarea: any = event.target;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    return;
  }

  checkMaxLength(event: any): void {
    if(event.target.value.length >= 200) {
      this.isMaxCharsReached = true;
    } else {
      this.isMaxCharsReached = false;
    }
  }   
}

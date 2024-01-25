import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class CalculatorComponent {
  toShow: string = '';
  calHistory = '';
  prevRes = '';
  history: string = '';
  reg = '/^[0-9+-*/()]*$/';

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
  }

  calculate() {
    console.log(this.toShow);
    try {
      this.prevRes = this.toShow;
      const res = eval(this.toShow);
      this.toShow = res;
    } catch (e) {
      console.log('Error');
      this.toShow = 'Error';
    }

    this.updateHistory(this.prevRes, this.toShow);
  }

  keyPressed(key: string) {
    this.toShow = this.toShow + key;
  }

  clear() {
    this.toShow = '';
  }

  updateHistory(prevRes, toShow) {
    let historyEntry = prevRes + ' = ' + toShow;

    this.calHistory += historyEntry + '\n';
    toShow = '';
  }
}

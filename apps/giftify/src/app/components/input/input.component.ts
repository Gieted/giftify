import { Component, Input } from '@angular/core';
import { isNumeric } from '../../../utils/string-utils';

@Component({
  selector: 'giftify-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  width = '120px';

  @Input()
  placeholder = '';

  @Input()
  type: 'text' | 'number' = 'text';

  onKeyDown(event: KeyboardEvent) {
    if (this.type === 'number' && event.key !== 'Backspace' && !isNumeric(event.key) && !event.ctrlKey) {
      event.preventDefault();
    }
  }
}

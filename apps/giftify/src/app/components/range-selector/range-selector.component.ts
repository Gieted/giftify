import { Component } from '@angular/core';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'giftify-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss'],
})
export class RangeSelectorComponent {
  constructor(private questionnaireService: QuestionnaireService) {}
}

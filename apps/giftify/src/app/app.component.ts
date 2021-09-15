import { Component } from '@angular/core';
import { QuestionnaireService } from './services/questionnaire.service';

@Component({
  selector: 'giftify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionnaireService],
})
export class AppComponent {
  title = 'giftify';
}

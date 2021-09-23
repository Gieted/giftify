import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'giftify-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  step = 0;

  hobbyList: string[] = [];

  stateForm!: FormGroup;

  constructor(public questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.stateForm = new FormGroup({
      search: new FormControl(null),
    });
  }

  onChoice(choice: string) {
    this.questionnaireService.onChooseGender(choice);
    this.step++;
  }

  onAge(age: HTMLInputElement) {
    this.questionnaireService.onChooseAge(parseInt(age.value));
    this.step++;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  onToggleHobby(hobby: string) {
    this.questionnaireService.onToggleHobby(hobby);
    if (this.hobbyList.includes(hobby) === false) {
      this.hobbyList.push(hobby);
    } else if (this.hobbyList.includes(hobby)) {
      const i = this.hobbyList.indexOf(hobby);
      this.hobbyList.splice(i, 1);
    }
  }

  onSubmit() {
    console.log(this.stateForm);
  }
}

import { Injectable } from '@angular/core';
import { Choice } from '../shared/choice.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  choice!: Choice;

  constructor() {
    this.choice = {};
  }

  onChooseSex(choice: string) {
    this.choice.sex = choice;
    console.log(this.choice);
  }

  onChooseAge(choice: number) {
    this.choice.age = choice;
    console.log(this.choice);
  }
}

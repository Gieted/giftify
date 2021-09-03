import { Injectable } from '@angular/core';
import { withoutElement } from '../../utils/array-utils';

@Injectable({
  providedIn: 'root',
})
export class HobbiesService {
  selectedHobbies: string[] = [];

  removeHobby(index: number) {
    this.selectedHobbies = withoutElement(this.selectedHobbies, index);
  }
}

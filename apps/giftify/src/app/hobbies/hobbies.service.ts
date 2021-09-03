import { Injectable } from '@angular/core';
import { withoutElement } from '../../utils/array-utils';

@Injectable({
  providedIn: 'root',
})
export class HobbiesService {
  selectedHobbies: string[] = [];

  unselectHobby(index: number) {
    this.selectedHobbies = withoutElement(this.selectedHobbies, index);
  }
}

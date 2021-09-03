import { Injectable } from '@angular/core';
import { removeAt } from '../../utils/array-utils';

@Injectable({
  providedIn: 'root',
})
export class HobbiesService {
  selectedHobbies: string[] = [];

  unselectHobby(index: number) {
    removeAt(this.selectedHobbies, index);
  }
}

import { Component } from '@angular/core';
import { HobbiesService } from '../hobbies/hobbies.service';
import { withoutElement } from '../../utils/array-utils';

@Component({
  selector: 'giftify-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  constructor(public hobbiesService: HobbiesService) {}

  removeHobby(index: number) {
    this.hobbiesService.selectedHobbies = withoutElement(this.hobbiesService.selectedHobbies, index);
  }
}

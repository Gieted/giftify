import { Component } from '@angular/core';
import { HobbiesService } from '../../services/hobbies.service';

@Component({
  selector: 'giftify-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  constructor(public hobbiesService: HobbiesService) {}
}

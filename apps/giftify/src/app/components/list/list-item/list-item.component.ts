import { Component, Input } from '@angular/core';
import { Gift } from '../../../shared/gift.model';

@Component({
  selector: 'giftify-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() gift!: Gift;
}

import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../../shared/gift.model';

@Component({
  selector: 'giftify-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() gift: Gift;

  constructor() { }

  ngOnInit(): void {
  }

}
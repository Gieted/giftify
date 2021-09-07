import { Component, OnInit } from '@angular/core';
import { Gift } from '../shared/gift.model';
import { ListService } from './list.service';

@Component({
  selector: 'giftify-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) {}

  giftList!: Gift[];

  ngOnInit(): void {
    this.giftList = this.listService.getList();
  }
}

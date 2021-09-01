import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'giftify-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {

  @Input()
  list: string[] = [];

  @Output()
  removeItem = new EventEmitter<number>()

  private readonly colors = [
    '#e13131',
    '#1fcc19',
    '#19b1cc',
    '#efe43c',
    '#cc84ff'
  ]

  getColor(index: number) {
    return this.colors[index % this.colors.length]
  }
}

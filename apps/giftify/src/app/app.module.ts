import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { InputComponent } from './input/input.component';
import { RangeSelectorComponent } from './range-selector/range-selector.component';
import { TagsComponent } from './tags/tags.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    InputComponent,
    RangeSelectorComponent,
    TagsComponent,
    ListComponent,
    ListItemComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

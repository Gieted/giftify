import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { InputComponent } from './input/input.component';
import { RangeSelectorComponent } from './range-selector/range-selector.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [AppComponent, FiltersComponent, InputComponent, RangeSelectorComponent, TagsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

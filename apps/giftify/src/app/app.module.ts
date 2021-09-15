import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { InputComponent } from './components/input/input.component';
import { RangeSelectorComponent } from './components/range-selector/range-selector.component';
import { TagsComponent } from './components/tags/tags.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    InputComponent,
    RangeSelectorComponent,
    TagsComponent,
    ListComponent,
    ListItemComponent,
    QuestionnaireComponent,
  ],
  imports: [BrowserModule, NgbModule, BrowserAnimationsModule, FormsModule],
  exports: [BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { FiltersComponent } from './filters.component';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HobbiesService } from '../../services/hobbies.service';
import { TagsComponent } from '../tags/tags.component';
import { RangeSelectorComponent } from '../range-selector/range-selector.component';
import { InputComponent } from '../input/input.component';

class HobbiesServiceMock extends HobbiesService {
  selectedHobbies = ['sports', 'board games', 'movies', 'books', 'chess'];
}

export default {
  title: 'Filters',
  component: FiltersComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{ provide: HobbiesService, useClass: HobbiesServiceMock }],
      declarations: [TagsComponent, RangeSelectorComponent, InputComponent],
    }),
  ],
} as Meta<FiltersComponent>;

const Template: Story<FiltersComponent> = (args: FiltersComponent) => ({
  component: FiltersComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};

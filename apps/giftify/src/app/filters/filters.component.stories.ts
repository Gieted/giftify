import { FiltersComponent } from './filters.component';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

export default {
  title: 'Filters',
  component: FiltersComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FiltersComponent>;

const Template: Story<FiltersComponent> = (args: FiltersComponent) => ({
  component: FiltersComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};

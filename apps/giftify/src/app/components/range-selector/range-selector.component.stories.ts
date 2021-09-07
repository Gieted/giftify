import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RangeSelectorComponent } from './range-selector.component';
import { InputComponent } from '../input/input.component';

export default {
  title: 'RangeSelector',
  component: RangeSelectorComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [],
    }),
  ],
} as Meta<RangeSelectorComponent>;

const Template: Story<RangeSelectorComponent> = (args: RangeSelectorComponent) => ({
  component: RangeSelectorComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};

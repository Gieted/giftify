import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    type: {
      options: ['text', 'number'],
      control: { type: 'radio' },
    },
  },
} as Meta<InputComponent>;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  width: '120px',
  placeholder: 'Type here!',
  type: 'text',
};

import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TagsComponent } from './tags.component';

export default {
  title: 'Tags',
  component: TagsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  argTypes: { removeItemByIndex: { action: 'removeItemByIndex' } },
} as Meta<TagsComponent>;

const Template: Story<TagsComponent> = (args: TagsComponent) => ({
  component: TagsComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  list: ['sports', 'board games', 'movies', 'books', 'chess']
}

export const Wrapped = Template.bind({});
Wrapped.args = {
  list: ['sports', 'board games', 'movies', 'books', 'chess']
}
Wrapped.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
}

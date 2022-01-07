import { ComponentMeta, Story } from '@storybook/react';
import * as React from 'react';

import { ListItems, ListItemsProps } from './ListItems';

interface Item {
   name: string;
}

const renderItem = (item: Item, i: number) => (
   <div key={item.name}>
      {i}. {item.name}
   </div>
);

const Template: Story<ListItemsProps<Item>> = props => <ListItems {...props} />;
export const Default = Template.bind({});
Default.args = {
   renderItem,
   items: [{ name: 'Tema' }, { name: 'Max' }],
};

export const Empty = Template.bind({});
Empty.args = {
   renderItem,
   items: [],
};

export const Undefined = Template.bind({});
Undefined.args = {
   renderItem,
   items: undefined,
};

export default {
   component: ListItems,
   title: 'components/ListItems',
} as ComponentMeta<typeof ListItems>;

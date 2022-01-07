import { ComponentMeta, Story } from '@storybook/react';
import * as React from 'react';

import { App } from './App';

const Template: Story = () => <App />;

export const Default = Template.bind({});
Default.args = {};

export default {
   component: App,
   title: 'layout/App',
} as ComponentMeta<typeof App>;

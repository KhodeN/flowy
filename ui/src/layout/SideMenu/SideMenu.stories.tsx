import { ComponentMeta, Story } from '@storybook/react';
import * as React from 'react';

import { SideMenu, SideMenuProps } from './SideMenu';

const Template: Story<SideMenuProps> = props => <SideMenu {...props} />;

export const Default = Template.bind({});
Default.args = {};

export default {
   component: SideMenu,
   title: 'layout/SideMenu',
} as ComponentMeta<typeof SideMenu>;

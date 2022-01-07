import { ComponentMeta, Story } from '@storybook/react';
import * as React from 'react';

import { QueryStatus } from '../../services/models';

import { QueryRenderer, QueryRendererProps } from './QueryRenderer';

const Template: Story<QueryRendererProps<string>> = props => <QueryRenderer {...props} />;

export const InProgress = Template.bind({});
InProgress.args = {
   query: { status: QueryStatus.InProgress },
   children: c => c,
};

export const Success = Template.bind({});
Success.args = {
   query: { status: QueryStatus.Success, data: 'data from query' },
   children: c => c,
};

export const Error = Template.bind({});
Error.args = {
   query: { status: QueryStatus.Error, error: 'error from query' },
};

export default {
   component: QueryRenderer,
   title: 'components/QueryRenderer',
} as ComponentMeta<typeof QueryRenderer>;

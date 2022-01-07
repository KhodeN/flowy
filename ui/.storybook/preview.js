import { stylesDecorator } from '../src/_storybook/stylesDecorator';

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
};

export const decorators = [stylesDecorator];

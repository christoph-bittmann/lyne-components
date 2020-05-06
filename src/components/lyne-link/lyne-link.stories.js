import { radios, text, withKnobs } from '@storybook/addon-knobs';
import { h } from 'jsx-dom';
import { withA11y } from '@storybook/addon-a11y';
import readme from './readme.md';

const newWindowLabel = 'Open Link in new window';
const newWindowOptions = {
  'Yes': 'true',
  'No': 'false'
};

export const defaultLink = () => <lyne-link
  text={text('text', 'Link text')}
  link={text('link', 'https://www.sbb.ch')}
  open-in-new-window={radios(newWindowLabel, newWindowOptions, 'false')}
/>;

export const openNewWindow = () => <lyne-link
  text={text('text', 'Link text')}
  link={text('link', 'https://www.sbb.ch')}
  open-in-new-window={radios(newWindowLabel, newWindowOptions, 'true')}
/>;

export default {
  decorators: [
    withKnobs,
    withA11y
  ],
  title: 'Link',
  parameters: {
    docs: {
      extractComponentDescription: () => {
        return readme;
      }
    }
  }
};

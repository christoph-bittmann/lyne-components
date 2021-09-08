import { h } from 'jsx-dom';
import readme from './readme.md';

const Template = (args) => (
  <lyne-image {...args} />
);

const aspectRatio = {
  control: {
    type: 'select'
  },
  options: [
    '1/1',
    '5/4',
    '4/3',
    '3/2',
    '16/9',
    '2/1',
    '1/2',
    '9/16',
    '2/3',
    '3/4',
    '4/5'
  ]
};

const blurHash = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'true',
    'false'
  ]
};

const imageSrc = {
  control: {
    type: 'select'
  },
  options: [
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/Billetkontrolle.jpg',
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/Hoehenrundweg-Gryden-Lenk.jpg',
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/Kaufmann-frau.jpg',
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/Corona-Schutzkonzept.jpg',
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/online-kaufen.jpg',
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/Digitale-Werbung-SBB.jpg',
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/Bahnhof-Luzern.jpg',
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/Einheitswagen-IV-EuroCity.jpg',
    'https://cdn.img.sbb.ch/content/dam/internet/lyne/Einsatzstrecken_EW4-Eurocity.jpg'
  ]
};

const hideFromScreenreader = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'true',
    'false'
  ]
};

const imageFormat = {
  control: {
    type: 'select'
  },
  options: [
    'auto',
    'avif'
  ]
};

const loading = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'eager',
    'lazy'
  ]
};

const width = '';

export const image = Template.bind({});

image.argTypes = {
  'alt': '',
  'aspect-ratio': aspectRatio,
  'blur-hash': blurHash,
  'caption': '',
  'hide-from-screenreader': hideFromScreenreader,
  'image-format': imageFormat,
  'image-src': imageSrc,
  'loading': loading,
  'performance-mark': ''
};

image.args = {
  'alt': '',
  'aspect-ratio': aspectRatio.options[0],
  'blur-hash': blurHash.options[0],
  'caption': 'Data without insights are trivial, and insights without action are pointless',
  'hide-from-screenreader': hideFromScreenreader.options[1],
  'image-format': imageFormat.options[0],
  'image-src': imageSrc.options[0],
  'loading': loading.options[0],
  'performance-mark': '',
  'width': '300'
};

export default {
  parameters: {
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'lyne-image'
};

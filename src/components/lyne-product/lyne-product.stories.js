import {
  ColorMilkDefault,
  ColorWhiteDefault
} from 'lyne-design-tokens/dist/js/tokens.es6';
import getMarkupForSvg from '../../global/helpers/get-markup-for-svg';
import { h } from 'jsx-dom';
import readme from './readme.md';
import sampleData from '../lyne-pearl-chain/lyne-pearl-chain.sample-data';

/* ************************************************* */
/* Storybook component wrapper, used in Storybook    */
/* ************************************************* */

const wrapperStyle = (context) => {
  const variantsOnDarkBg = ['primary-negative'];

  if (variantsOnDarkBg.indexOf(context.args.appearance) === -1) {
    return `background-color: ${ColorWhiteDefault};`;
  }

  return `background-color: ${ColorMilkDefault};`;
};

/* ************************************************* */
/* Slot templates, used in Storybook template        */
/* ************************************************* */

/* --- icon slot ----------------------------------- */

const iconArgs = {
  icon: 'ticket-route-medium'
};

const SlotIconTemplate = (args) => (
  <span>{getMarkupForSvg(args.icon)}</span>
);

/* --- title slot ---------------------------------- */

const lyneTitleArgs = {
  'level': 2,
  'text': '1/2',
  'visual-level': 1
};

const SlotLyneTitleTemplate = (args) => (
  <lyne-title {...args} />
);

const lyneJourneyHeaderArgs = {
  destination: 'Loèche-les-Bains',
  isRoundTrip: true,
  markup: 'h2',
  origin: 'La Chaux de Fonds',
  size: 5
};

const SlotLyneJourneyHeaderTemplate = (args) => (
  <lyne-journey-header {...args} />
);

/* --- pearl chain slot ---------------------------------- */

const SlotPearlChainTemplate = () => (
  <lyne-pearl-chain legs={JSON.stringify(sampleData.stop4)} />
);

/* --- card-badge slot ----------------------------- */

const cardBadgeArgs = {
  isDiscount: true,
  price: '88.88',
  size: 'small',
  // eslint-disable-next-line max-len
  // slotGeneric: '<span>on <time datetime="2021-11-25">Black Friday</time></span>',
  text: 'from CHF'
};

const SlotCardBadgeTemplate = (args) => (
  <lyne-card-badge {...args}>
    {args.slotGeneric &&
      <span slot='generic' dangerouslySetInnerHTML={{
        __html: args.slotGeneric
      }}></span>
    }
  </lyne-card-badge>
);

/* --- action slot ----------------------------- */

const actionArgs = {
  'href-value': 'https://github.com/lyne-design-system/lyne-components',
  // 'icon': 'qrcode-small',
  'icon-placement': 'start',
  'text': 'Abo bearbeiten',
  'variant': 'secondary'
};

const SlotActionTemplate = (args) => (
  <lyne-link-button {...args}>
    {args.icon &&
      <span slot='icon'>{getMarkupForSvg(args.icon)}</span>
    }
  </lyne-link-button>
);

/* ************************************************* */
/* Storybook templates                               */
/* ************************************************* */

const TemplateLyneTitle = (args) => (
  <lyne-product {...args}>
    <div slot='title'><SlotLyneTitleTemplate {...lyneTitleArgs}/></div>
    <div slot='action'><SlotActionTemplate {...actionArgs}/></div>
  </lyne-product>
);

const TemplateLyneJourneyHeader = (args) => (
  <lyne-product {...args}>
    <div slot='icon'><SlotIconTemplate {...iconArgs}/></div>
    <div slot='title'><SlotLyneTitleTemplate {...lyneTitleArgs}/><SlotLyneJourneyHeaderTemplate {...lyneJourneyHeaderArgs}/></div>
    <div slot='connection-details'><SlotPearlChainTemplate /></div>
    <div slot='card-badge'><SlotCardBadgeTemplate {...cardBadgeArgs}/></div>
    <div slot='action'><SlotActionTemplate {...actionArgs}/></div>
  </lyne-product>
);

/* ************************************************* */
/* Storybook controls                                */
/* ************************************************* */

const appearance = {
  control: {
    type: 'select'
  },
  options: [
    'primary',
    'primary-negative'
  ],
  table: {
    category: 'Appearance'
  }
};

const text = {
  control: {
    type: 'text'
  }
};

const lead = {
  control: {
    type: 'text'
  }
};

const defaultArgTypes = {
  appearance,
  lead,
  text
};

const defaultArgs = {
  appearance: appearance.options[0],
  lead: 'Halbtax-Abo',
  text: '2. Klasse, gültig bis 30.11.2021'
};

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */

/* --- Product with Lyne Title --------- */
export const ProductLyneTitle = TemplateLyneTitle.bind({});

ProductLyneTitle.argTypes = defaultArgTypes;
ProductLyneTitle.args = {
  ...defaultArgs
};

ProductLyneTitle.documentation = {
  title: 'Product as a subscription'
};

/* --- Product with Journey Title ----- */
export const ProductLyneJourneyHeader = TemplateLyneJourneyHeader.bind({});

ProductLyneJourneyHeader.argTypes = defaultArgTypes;
ProductLyneJourneyHeader.args = {
  ...defaultArgs
};

ProductLyneJourneyHeader.documentation = {
  title: 'Product as a ticket'
};

/* --- next story ... ------------------------------ */

/* ************************************************* */
/* Render storybook section and stories              */
/* ************************************************* */

export default {
  decorators: [
    (Story, context) => (
      <div style={`${wrapperStyle(context)} padding: 2rem`}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      disable: true
    },
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'lyne-product'
};

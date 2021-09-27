import { ColorCharcoalDefault } from 'lyne-design-tokens/dist/js/tokens.es6';
import { h } from 'jsx-dom';
import readme from './readme.md';

const Template = (args) => <lyne-sbb-signet {...args} />;

const variants = {
  control: {
    type: 'select'
  },
  options: [
    'default',
    'white-on-black'
  ]
};

const protectiveRoom = {
  control: {
    type: 'select'
  },
  options: [
    'none',
    'ideal',
    'minimal',
    'align-right',
    'align-bottom-right'
  ]
};

const defaultArgTypes = {
  'protective-room': protectiveRoom,
  'variant': variants
};

const defaultArgs = {
  'protective-room': protectiveRoom.options[0],
  'variant': variants.options[0]
};

export const NoProtectiveRoom = Template.bind({});

NoProtectiveRoom.argTypes = defaultArgTypes;
NoProtectiveRoom.args = JSON.parse(JSON.stringify(defaultArgs));

NoProtectiveRoom.documentation = {
  title: 'No protective room'
};

/* eslint-disable prefer-destructuring */

export const IdealProtectiveRoom = Template.bind({});

IdealProtectiveRoom.argTypes = defaultArgTypes;
IdealProtectiveRoom.args = JSON.parse(JSON.stringify(defaultArgs));
IdealProtectiveRoom.args['protective-room'] = protectiveRoom.options[1];

IdealProtectiveRoom.documentation = {
  title: 'Ideal protective room'
};

export const MinimalProtectiveRoom = Template.bind({});

MinimalProtectiveRoom.argTypes = defaultArgTypes;
MinimalProtectiveRoom.args = JSON.parse(JSON.stringify(defaultArgs));
MinimalProtectiveRoom.args['protective-room'] = protectiveRoom.options[2];

MinimalProtectiveRoom.documentation = {
  title: 'Minimal protective room'
};

export const AlignRightProtectiveRoom = Template.bind({});

AlignRightProtectiveRoom.argTypes = defaultArgTypes;
AlignRightProtectiveRoom.args = JSON.parse(JSON.stringify(defaultArgs));
AlignRightProtectiveRoom.args['protective-room'] = protectiveRoom.options[3];

AlignRightProtectiveRoom.documentation = {
  title: 'Align right'
};

export const AlignBottomRightProtectiveRoom = Template.bind({});

AlignBottomRightProtectiveRoom.argTypes = defaultArgTypes;
AlignBottomRightProtectiveRoom.args = JSON.parse(JSON.stringify(defaultArgs));
AlignBottomRightProtectiveRoom.args['protective-room'] = protectiveRoom.options[4];

AlignBottomRightProtectiveRoom.documentation = {
  title: 'Align bottom right'
};

export const WhiteOnBlack = Template.bind({});

WhiteOnBlack.argTypes = defaultArgTypes;
WhiteOnBlack.args = JSON.parse(JSON.stringify(defaultArgs));
WhiteOnBlack.args['protective-room'] = protectiveRoom.options[1];
WhiteOnBlack.args.variant = variants.options[1];

WhiteOnBlack.decorators = [
  (Story) => (
    <div style={`background-color: ${ColorCharcoalDefault};`}>
      <Story />
    </div>
  )
];

WhiteOnBlack.documentation = {
  container: {
    styles: {
      'background-color': ColorCharcoalDefault
    }
  },
  title: 'White on black'
};

/* eslint-enable prefer-destructuring */

export default {
  decorators: [
    (Story) => (
      <div style='max-width: 1024px;'>
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'Brand Elements/SBB Signet'
};

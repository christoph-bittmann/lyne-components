import { LyneTab } from './lyne-tab';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-tab', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneTab],
      html: '<lyne-tab />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-tab>
          <mock:shadow-root>
            <button class="some-class"></button>
          </mock:shadow-root>
        </lyne-tab>
      `);
  });

});
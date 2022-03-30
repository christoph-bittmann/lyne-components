import { LyneGrid } from './lyne-grid';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-grid', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneGrid],
      html: '<lyne-grid />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-grid>
          <mock:shadow-root>
            <section class="section section--full-bleed--forever section--primary"></section>
          </mock:shadow-root>
        </lyne-grid>
      `);
  });

});

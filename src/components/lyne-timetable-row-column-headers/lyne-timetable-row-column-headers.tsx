import {
  Component,
  h,
  Prop
} from '@stencil/core';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-timetable-row-column-headers.default.scss',
    shared: 'styles/lyne-timetable-row-column-headers.shared.scss'
  },
  tag: 'lyne-timetable-row-column-headers'
})

export class LyneTimetableRowColumnHeaders {

  /**
   * Stringified JSON which defines most of the
   * content of the component. Please check the
   * individual stories to get an idea of the
   * structure.
   */
  @Prop() public config!: string;

  public render(): JSX.Element {

    const columnHeaders = JSON.parse(this.config);

    return (
      <div
        class='column-headers'
        role='none'
      >
        {
          columnHeaders.map((columnHeader) => <div role='columnheader'>{columnHeader}</div>)
        }
      </div>

    );
  }
}

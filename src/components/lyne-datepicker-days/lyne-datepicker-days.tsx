import {
  Component,
  h,
  Prop
} from '@stencil/core';

import daysHelper from './lyne-datepicker-days.helper';
import { guid } from '../../global/guid';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker-days.default.scss',
    shared: 'styles/lyne-datepicker-days.shared.scss'
  },
  tag: 'lyne-datepicker-days'
})

export class LyneDatepickerDays {

  /**
   * Stringified Array to define the written out weekdays.
   * Format:
   * `["Montag","Dienstag","Mittwoch", ...]`
   * Length: the array must have the same length as the array of the property
   * daysShort.
   */
  @Prop() public days!: string;

  /**
   * Stringified Array to define the short form of weekdays.
   * Format:
   * `["Mo","Di","Mi", ...]`
   * Length: the array must have the same length as the array of the property
   * days.
   */
  @Prop() public daysShort!: string;

  /**
   * Set the month to be displayed.
   * e.g. "8" for august or "11" for november
   */
  @Prop({
    reflect: true
  }) public selectedMonth!: string;

  /**
   * Set the year to be displayed.
   * e.g. "1995" or "2023"
   */
  @Prop({
    reflect: true
  }) public selectedYear!: string;

  private _guid: string;

  /*
   * calculate the day of the week the first day of a month lands on
   */
  private _calcStartWeekday(month: number, year: number): number {
    const firstDateOfTheMonth: Date = new Date(year, month);

    // sunday - saturday: 0 - 6
    let startWeekday: number = firstDateOfTheMonth.getDay();

    // -1 to take into account that week starts on monday
    startWeekday--;

    if (startWeekday === -1) {
      startWeekday = 6;
    }

    return startWeekday;
  }

  /*
   * calculate the number of days in a given month and year
   */
  private _calcNumberOfDays(month: number, year: number): number {
    // by using 0 as the day it will give us the last day of the prior month
    return new Date(year, month + 1, 0)
      .getDate();
  }

  public componentWillLoad(): void {
    this._guid = guid();
  }

  public render(): JSX.Element {
    const objDays: any = daysHelper(this.daysShort, this.days);
    let renderWeekdays = false;
    const rows = [];

    if (objDays) {
      if (objDays.long.length > 0 && objDays.short.length > 0) {
        renderWeekdays = true;
      }
    }

    if (this.selectedMonth && this.selectedYear) {
      // months are index-based
      const month = Number(this.selectedMonth) - 1;
      const year = Number(this.selectedYear);
      const startWeekday: number = this._calcStartWeekday(month, year);
      const numberOfDays: number = this._calcNumberOfDays(month, year);

      let cells = [];
      let weekday = 0;
      let currentDay = 1;

      // insert the leading empty cells
      for (weekday = 0; weekday < startWeekday; weekday++) {
        cells.push(<td class='datepicker__day--empty'>&nbsp;</td>);
      }

      // insert the days of the month
      for (currentDay = 1; currentDay <= numberOfDays; currentDay++) {
        cells.push(<td class='datepicker__day--past' role='gridcell'><span>{currentDay}</span></td>);

        // last day of the week
        if (weekday === 6 && currentDay < numberOfDays) {
          rows.push(<tr role='row'>{...cells}</tr>);

          // clear array to populate the days of the next week
          cells = [];

          // set weekday to monday
          weekday = 0;

        } else {
          weekday++;
        }
      }

      // insert any trailing empty cells
      for (weekday; weekday < 7; weekday++) {
        cells.push(<td class='datepicker__day--empty'>&nbsp;</td>);
      }

      rows.push(<tr role='row'>{...cells}</tr>);
    }

    return (
      <table>
        <thead>
          <tr>
            {renderWeekdays
              ? (
                objDays.short.map((item, index) => (
                  <th id={`${this._guid}${objDays.long[index]}`}>{item}</th>
                ))
              )
              : ''
            }
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

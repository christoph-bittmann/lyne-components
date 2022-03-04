import {
  Component,
  h,
  Prop
} from '@stencil/core';

import getDocumentLang from '../../global/helpers/get-document-lang';

import {
  i18nApproximatelyDelayedBy,
  i18nArrival,
  i18nBarrierFreeTravel,
  i18nClass,
  i18nDeparture,
  i18nOccupancy,
  i18nPlatformArrivingOn,
  i18nPlatformLeavingFrom
} from '../../global/i18n';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-timetable-segment.default.scss',
    shared: 'styles/lyne-timetable-segment.shared.scss'
  },
  tag: 'lyne-timetable-segment'
})

export class LyneTimetableSegment {

  private _currentLanguage = getDocumentLang();

  /**
   * Stringified JSON which defines most of the
   * content of the component. Please check the
   * individual stories to get an idea of the
   * structure.
   */
  @Prop() public config!: string;

  private _createA11yArrivalSummary(config): string {

    let arrivalSummary = '';

    const {
      delay
    } = config.arrivalTime;

    arrivalSummary += `${i18nArrival[this._currentLanguage]}: `;
    arrivalSummary += `${config.arrivalStation} `;
    arrivalSummary += `${config.arrivalTime.time} `;
    arrivalSummary += `${i18nPlatformArrivingOn[this._currentLanguage]} `;
    arrivalSummary += `${config.arrivalPlatform.value}.`;

    if (delay > 0) {
      let delayText = ` ${i18nApproximatelyDelayedBy.multiple[this._currentLanguage]}`;

      if (delay === 1) {
        delayText = ` ${i18nApproximatelyDelayedBy.single[this._currentLanguage]}`;
      }

      arrivalSummary += delayText.replace(/(?:\{mins\})/u, delay);
    }

    if (config.arrivalBarrierFree) {
      arrivalSummary += ` ${i18nBarrierFreeTravel[this._currentLanguage]} `;
      arrivalSummary += config.arrivalBarrierFree.text;
    }

    return arrivalSummary;

  }

  private _createA11yDepartureSummary(config): string {

    let departureSummary = '';

    const {
      delay
    } = config.departureTime;

    departureSummary += `. ${i18nDeparture[this._currentLanguage]}: `;
    departureSummary += `${config.departureStation} `;
    departureSummary += `${config.departureTime.time} `;
    departureSummary += `${i18nPlatformLeavingFrom[this._currentLanguage]} `;
    departureSummary += `${config.departurePlatform.value}.`;

    if (delay > 0) {
      let delayText = ` ${i18nApproximatelyDelayedBy.multiple[this._currentLanguage]}`;

      if (delay === 1) {
        delayText = ` ${i18nApproximatelyDelayedBy.single[this._currentLanguage]}`;
      }

      departureSummary += delayText.replace(/(?:\{mins\})/u, delay);
    }

    if (config.departureBarrierFree) {
      departureSummary += ` ${i18nBarrierFreeTravel[this._currentLanguage]} `;
      departureSummary += config.departureBarrierFree.text;
    }

    return departureSummary;

  }

  private _createA11yOccupancySummary(occupancyItems): string {

    let occupancySummary = '';

    occupancyItems.forEach((occupancyItem) => {

      const occupancyText = i18nOccupancy[occupancyItem.occupancy][this._currentLanguage];

      const classText = occupancyItem.class === '1'
        ? 'first'
        : 'second';

      occupancySummary += `${i18nClass[classText][this._currentLanguage]}. ${occupancyText} `;

    });

    return occupancySummary;

  }

  private _createA11yTravelHintsSummary(travelHintsItems): string {

    let travelHintsSummary = '';

    if (travelHintsItems.length > 0) {
      travelHintsItems.forEach((travelHintItem) => {
        travelHintsSummary += `${travelHintItem.text} `;
      });
    }

    return travelHintsSummary;

  }

  /**
   * This is actually not a very good solution
   * but in this case feasible because the markup
   * can not follow the logical visual order if we
   * want to be able to display all potential
   * information while keeping the layout intact
   * even in case of weird line breaks.
   * @param config
   * @private
   */
  private _createA11ySummary(config): string {

    const {
      transportationNumber
    } = config;

    let a11ySummary = '';

    // Transportation information
    a11ySummary += `${transportationNumber.meansOfTransport.text} `;
    a11ySummary += `${transportationNumber.product.text} `;
    a11ySummary += `${transportationNumber.direction}`;

    // Departure information
    a11ySummary += ` ${this._createA11yDepartureSummary(config)}`;

    // Arrival information
    a11ySummary += ` ${this._createA11yArrivalSummary(config)}`;

    // Occupancy information
    a11ySummary += ` ${this._createA11yOccupancySummary(config.occupancy.occupancyItems)}`;

    // Travel Hints information
    a11ySummary += `${this._createA11yTravelHintsSummary(config.travelHints.travelHintsItems)}`;

    return a11ySummary;

  }
  public render(): JSX.Element {

    const config = JSON.parse(this.config);

    const a11ySummary = this._createA11ySummary(config);

    return (
      <section
        aria-label={a11ySummary}
        class='segment'
        role='text'
      >
        <div
          aria-hidden='true'
          class='cols'
          role='presentation'
        >
          <div class='col col--times'>
            <lyne-timetable-transportation-time
              appearance='second-level'
              config={JSON.stringify(config.departureTime)}
            >
            </lyne-timetable-transportation-time>
            <div class='segment__cus-him-information'>
            </div>
            <lyne-timetable-transportation-time
              appearance='second-level'
              config={JSON.stringify(config.arrivalTime)}
            >
            </lyne-timetable-transportation-time>
          </div>

          <div class='col col--pearlchain'>
            <lyne-pearl-chain
              appearance='vertical'
              legs={JSON.stringify(config.pearlChain.legs)}
              status={config.pearlChain.status}
              open-end={config.pearlChain.openEnd}
            ></lyne-pearl-chain>
          </div>

          <div class='col col--details'>
            <div class='segment__transportation-details'>
              <p class='departing-from'>{config.departureStation}</p>

              {
                config.departureCusHim
                  ? <lyne-timetable-cus-him
                    appearance='second-level-message'
                    config={JSON.stringify(config.departureCusHim)}
                  >
                  </lyne-timetable-cus-him>
                  : ''
              }

              {
                config.departureBarrierFree
                  ? <lyne-timetable-barrier-free
                    config={JSON.stringify(config.departureBarrierFree)}
                  >
                  </lyne-timetable-barrier-free>
                  : ''
              }

              <div class='inner'>
                <lyne-timetable-transportation-number
                  appearance='second-level'
                  config={JSON.stringify(config.transportationNumber)}
                >
                </lyne-timetable-transportation-number>
                <lyne-timetable-travel-hints
                  appearance='second-level-list'
                  config={JSON.stringify(config.travelHints)}
                >
                </lyne-timetable-travel-hints>
                <lyne-timetable-occupancy
                  config={JSON.stringify(config.occupancy)}
                >
                </lyne-timetable-occupancy>
              </div>
              {
                config.arrivalCusHim
                  ? <lyne-timetable-cus-him
                    appearance='second-level-message'
                    config={JSON.stringify(config.arrivalCusHim)}
                  >
                  </lyne-timetable-cus-him>
                  : ''
              }
              <p class='arriving-at'>{config.arrivalStation}</p>
            </div>
          </div>

          <div class='col col--platforms'>
            <lyne-timetable-platform
              appearance='second-level-departure'
              config={JSON.stringify(config.departurePlatform)}
            >
            </lyne-timetable-platform>
            <lyne-timetable-platform
              appearance='second-level-arrival'
              config={JSON.stringify(config.arrivalPlatform)}
            >
            </lyne-timetable-platform>
          </div>
        </div>

        {
          config.arrivalBarrierFree
            ? <lyne-timetable-barrier-free
              aria-hidden='true'
              config={JSON.stringify(config.arrivalBarrierFree)}
              role='presentation'
            >
            </lyne-timetable-barrier-free>
            : ''
        }

      </section>
    );
  }
}

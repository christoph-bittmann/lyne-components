import {
  Component,
  h,
  Prop
} from '@stencil/core';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-timetable-segment.default.scss',
    shared: 'styles/lyne-timetable-segment.shared.scss'
  },
  tag: 'lyne-timetable-segment'
})

export class LyneTimetableSegment {

  /**
   * Stringified JSON which defines most of the
   * content of the component. Please check the
   * individual stories to get an idea of the
   * structure.
   */
  @Prop() public config!: string;

  public render(): JSX.Element {

    const config = JSON.parse(this.config);

    return (
      <p
        aria-label='Train xyz leaving from ...'
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
            <lyne-timetable-transportation-time
              appearance='second-level'
              config={JSON.stringify(config.arrivalTime)}
            >
            </lyne-timetable-transportation-time>
          </div>

          <div class='col col--pearlchain'>
            <lyne-pearl-chain
              appearance="vertical"
              legs={JSON.stringify(config.pearlChain.legs)}
              status={config.pearlChain.status}
              open-end='true'
            ></lyne-pearl-chain>
          </div>

          <div class='col col--details'>
            <div class='segment__transportation-details'>
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
            </div>
          </div>

          <div class='col col--platforms'>
            <lyne-timetable-platform
              appearance='second-level-departure'
              config={JSON.stringify(config.departurePlatform)}
            >
            </lyne-timetable-platform>
            <lyne-timetable-occupancy
              config={JSON.stringify(config.occupancy)}
            >
            </lyne-timetable-occupancy>
            <lyne-timetable-platform
              appearance='second-level-arrival'
              config={JSON.stringify(config.arrivalPlatform)}
            >
            </lyne-timetable-platform>
          </div>
        </div>
      </p>
    );
  }
}

import {
  Component,
  h,
  Prop
} from '@stencil/core';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-timetable.default.scss',
    shared: 'styles/lyne-timetable.shared.scss'
  },
  tag: 'lyne-timetable'
})

export class LyneTimetable {

  @Prop() public config!: string;

  public render(): JSX.Element {

    const rowItems = JSON.parse(this.config);

    return (
      <div
        class='timetable'
        role='grid'
      >
        <div
          class='timetable__column-headers'
          role='row'
        >
          <div role='columnheader'>Kurzinfo</div>
          <div role='columnheader'>Details</div>
          <div role='columnheader'>Platform</div>
          <div role='columnheader'>Occupancy Forecast</div>
          <div role='columnheader'>Duration</div>
          <div role='columnheader'>Real time information</div>
        </div>
        <lyne-timetable-row
          config={JSON.stringify(rowItems[0])}
          role='row'
        >
        </lyne-timetable-row>
        <lyne-timetable-row
          config={JSON.stringify(rowItems[1])}
          role='row'
        >
        </lyne-timetable-row>
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false">
          <symbol id='alternative' viewBox='0 0 16 16'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m0,1.99411C0,.893115.894993.000122,1.99398.000122H14.0059c1.101,0,1.994.893993,1.994,1.993988V14.006c0,1.101-.895,1.994-1.994,1.994H1.99398C.892993,16,0,15.105,0,14.006V1.99411z" fill="#eb0000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m10.3905,1.9998h-1.5v8.3169H5.78153l1.72398-1.72495L6.44452,7.53176,2.90855,11.0687l3.53597,3.537,1.06099-1.061-1.72798-1.728h4.61297V1.9998z" fill="#fff"></path>
          </symbol>
          <symbol id='delay' viewBox='0 0 16 16'>
            <rect width="16" height="16" rx="2" fill="#eb0000"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="m7.994,2C4.682,2,2,4.688,2,8s2.682,6,5.994,6C11.312,14,14,11.312,14,8s-2.688-6-6.006-6zM8,12.8c-2.652,0-4.8-2.148-4.8-4.8S5.348,3.2,8,3.2,12.8,5.348,12.8,8,10.652,12.8,8,12.8z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m8.30002,5h-.9v3.54098L10.55,10.4,11,9.6741,8.30002,8.09836V5z" fill="#fff"></path>
          </symbol>
          <symbol id='ic-8' viewBox='0 0 59 20'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m2,0C.89543,0,0,.895431,0,2v16c0,1.1046.895431,2,2,2h55c1.1046,0,2-.8954,2-2V2c0-1.104569-.8954-2-2-2H2z" fill="#eb0000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m38.3331,9.59037c-.5002-.15794-.934-.47781-1.2337-.90957-.2962-.45543-.4461-.99101-.4296-1.53457-.0231-.95685.4402-1.85985,1.2298-2.39687.7545-.53643,1.6614-.81389,2.5858-.79102,1.1352,0,2.0629.3138,2.7829.9414.6572.53499,1.0346,1.34199,1.0247,2.19102.0156.55147-.1355,1.09476-.4335,1.5584-.2975.43909-.7291.76938-1.2298.94121.3628.09703.7066.25485,1.0171.46683.7303.5326,1.0955,1.3104,1.0957,2.3334.0359,1.101-.4676,2.15-1.348,2.8082-.7568.5853-1.7292.878-2.9171.8779-1.2876,0-2.3124-.3217-3.0743-.965-.7827-.6451-1.2226-1.6182-1.1905-2.634,0-1.0178.3521-1.8062,1.0564-2.3653.3153-.24526.6775-.42295,1.0641-.52203zm2.105.87013c-.5155-.02-1.0172.1697-1.3914.5262-.3612.3532-.5572.8428-.5399,1.3486-.0195.5158.1795,1.0159.5477,1.3764.3844.3607.897.5516,1.4229.5298.6622,0,1.1589-.1951,1.4901-.5853.3145-.358.4858-.8201.481-1.2973.0171-.5163-.1833-1.0159-.5521-1.3763-.3958-.3647-.9218-.553-1.4583-.5221zM39.232,6.17728c.3385-.29254.7757-.44398,1.2219-.42324.4618-.02786.9178.1157,1.281.40332.3147.28546.4842.69818.4613,1.12324.0219.4357-.1449.85965-.4574,1.16289-.3443.29904-.7908.4522-1.2454.42715-.4588.02355-.909-.13078-1.2575-.43105-.3166-.29634-.488-.71694-.4691-1.15098-.0159-.42117.1543-.82791.4652-1.11133z" fill="#fff"></path><path d="m9.22072,4.19995h4.05608L8.25878,15.8H4.18579L9.22072,4.19995zm6.72758,0h14.3949l-1.4906,3.44547H18.5724l-2.0413,4.70908h10.2847L25.3259,15.8h-14.395l5.0174-11.60005z" fill="#fff"></path>
          </symbol>
          <symbol id='transportation-bus-right' viewBox='0 0 24 24'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m22.5,0h-21C.675,0,0,.675,0,1.5v21c0,.825.675,1.5,1.5,1.5h21c.825,0,1.5-.675,1.5-1.5v-21c0-.825-.675-1.5-1.5-1.5z" fill="#2d327d"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m6.375,8.25H3V7.5h15.075c.6075,0,1.1475.4125,1.305.9975l1.575,5.8725c.03.1125.045.2325.045.3525v3.8025c0,.33-.27.6-.6.6h-6.975c-.33,0-.6-.27-.6-.6v-.075c0-1.905-1.545-3.45-3.45-3.45s-3.45,1.545-3.45,3.45v.075c0,.33-.27.6-.6.6H3V13.5h3.375c.21,0,.375-.165.375-.375v-4.5c0-.21-.165-.375-.375-.375zm11.0625,6.375c0,.21.165.375.375.375H19.86c.21,0,.375-.165.375-.375,0-.03-.0075-.0675-.015-.0975l-1.5825-5.91C18.57,8.355,18.33,8.175,18.06,8.175h-.015c-.33,0-.6.27-.6.6l-.0075,5.85zm-1.35.45c-.33,0-.6-.27-.6-.6v-5.7c0-.33.27-.6.6-.6s.6.27.6.6v5.7c0,.33-.27.6-.6.6zm-2.55-.6c0,.33.27.6.6.6s.6-.27.6-.6v-5.7c0-.33-.27-.6-.6-.6s-.6.27-.6.6v5.7zM7.875,13.5c-.21,0-.375-.165-.375-.375v-4.5c0-.21.165-.375.375-.375h4.5375c.21,0,.375.165.375.375v4.5c0,.21-.165.375-.375.375H7.875z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m11.9775,18.4725c0-1.4475-1.1775-2.625-2.62501-2.625-1.4475,0-2.625,1.1775-2.625,2.625s1.1775,2.625,2.625,2.625c1.44751,0,2.62501-1.1775,2.62501-2.625zm-1.125-.06c0,.825-.675,1.5-1.50001,1.5-.8325,0-1.5-.6675-1.5-1.5,0-.825.675-1.5,1.5-1.5.82501,0,1.50001.675,1.50001,1.5z" fill="#fff"></path>
          </symbol>
          <symbol id='transportation-luftseilbahn-right' viewBox='0 0 24 24'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m22.5,0h-21C.675,0,0,.675,0,1.5v21c0,.825.675,1.5,1.5,1.5h21c.825,0,1.5-.675,1.5-1.5v-21c0-.825-.675-1.5-1.5-1.5z" fill="#2d327d"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m8.775,5.43755,6.465-1.1325c.33-.06.5775-.345.5775-.6825,0-.3825-.3075-.6975-.69-.6975-.0375,0-.0825,0-.12.0075l-6.465,1.1325c-.33.06-.5775.345-.5775.6825,0,.3825.3075.69.69.69.045.0075.0825.0075.12,0z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m3,7.51505,18-3.15v-.69L3,6.83255v.6825z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m16.5375,11.2501H20.25c.4125,0,.75.3375.75.75v8.25c0,.4125-.3375.75-.75.75H3.75c-.4125,0-.75-.3375-.75-.75v-8.25c0-.4125.3375-.75.75-.75h3.7125l2.37-4.56003,1.305-.225-2.49,4.77753H15.39l-2.6775-5.05503,1.05-.18,2.775,5.24253zm-8.16,5.25c.21,0,.375-.165.375-.375v-3.75c0-.21-.165-.375-.375-.375H4.125c-.21,0-.375.165-.375.375v3.75c0,.21.165.375.375.375h4.2525zm6.12-.375c0,.21-.165.375-.375.375H9.87c-.21,0-.375-.165-.375-.375v-3.75c0-.21.165-.375.375-.375h4.2525c.21,0,.375.165.375.375v3.75zM19.875,16.5001c.21,0,.375-.165.375-.375v-3.75c0-.21-.165-.375-.375-.375h-4.2525c-.21,0-.375.165-.375.375v3.75c0,.21.165.375.375.375h4.2525z" fill="#fff"></path>
          </symbol>
          <symbol id='transportation-tram-right' viewBox='0 0 24 24'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m22.5,0h-21C.675,0,0,.675,0,1.5v21c0,.825.675,1.5,1.5,1.5h21c.825,0,1.5-.675,1.5-1.5v-21c0-.825-.675-1.5-1.5-1.5z" fill="#2d327d"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m10.425,4.18491c-.0675-.0675-.105-.15-.105-.2475,0-.195.1575-.345.345-.345.09,0,.18.0375.2475.105l3.885,3.8775h3.09c.555,0,1.0425.36,1.2.8925l1.89,6.20249c.015.06.0225.1125.0225.1725v2.7075c0,.21-.165.375-.375.375H3v-4.425h3.6375c.21,0,.375-.165.375-.375V8.62491c0-.21-.165-.375-.375-.375h-3.63v-.675H13.815l-3.39-3.39zm6.8325,10.43999c0,.21.165.375.375.375h2.2125c.21,0,.375-.165.375-.375,0-.0375-.0075-.075-.015-.1125L18.39,8.57241c-.075-.24-.2925-.3975-.54-.3975h-.0375c-.3075,0-.5625.255-.5625.5625l.0075,5.88749zm-1.26.45c-.3075,0-.5625-.255-.5625-.5625V8.73741c0-.3075.255-.5625.5625-.5625s.5625.255.5625.5625v5.77499c0,.3075-.255.5625-.5625.5625zM12.945,8.62491c0-.21-.165-.375-.375-.375h-4.5c-.21,0-.375.165-.375.375v4.49999c0,.21.165.375.375.375h4.5c.21,0,.375-.165.375-.375V8.62491zm.675,5.88749V8.73741c0-.3075.2475-.5625.5625-.5625.3075,0,.5625.255.5625.5625v5.77499c0,.3075-.255.5625-.5625.5625s-.5625-.255-.5625-.5625z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m12.3525,18.6749h3.78c-.3075.7725-1.0575,1.275-1.89,1.275s-1.575-.5025-1.89-1.275z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m7.85251,18.6749h3.77999c-.3075.7725-1.0575,1.275-1.88999,1.275-.8325,0-1.575-.5025-1.89-1.275z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m21.0075,20.325H3.00751V21H21.0075v-.675z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m21.0075,2.99995H3.00751v.3375H21.0075v-.3375z" fill="#fff"></path>
          </symbol>
          <symbol id='transportation-zug-right' viewBox='0 0 24 24'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m22.5,0h-21C.675,0,0,.675,0,1.5v21c0,.825.675,1.5,1.5,1.5h21c.825,0,1.5-.675,1.5-1.5v-21c0-.825-.675-1.5-1.5-1.5z" fill="#2d327d"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m20.715,18.8625c.21,0,.375-.165.375-.375,0-.015,0-.0375,0-.0525l-.3225-2.235H16.875v2.6625h3.84z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m11.6325,8.19001H3v-.69h7.05l-2.2125-1.5L12,3.63751l4.14,2.3625h.0225l-2.2125,1.5h4.5975c.5625,0,1.035.4125,1.1175.9675l1.005,7.01999H3V11.775h8.6325c.2025,0,.3675-.165.3675-.3675s-.165-.3675-.3675-.3675H3v-.69h8.6325c.2025,0,.3675-.165.3675-.36749,0-.2025-.165-.3675-.3675-.3675H3v-.69h8.6325c.2025,0,.3675-.165.3675-.3675s-.165-.3675-.3675-.3675zM16.65,11.4c0,.21.165.375.375.375h1.9575c.21,0,.375-.165.375-.375v-.0525l-.405-2.83499c-.03-.1875-.1875-.3225-.375-.3225H17.025c-.21,0-.375.165-.375.375V11.4zm-1.845-5.33999-2.1225,1.44h-1.365l-2.13-1.4475L12,4.45501l2.805,1.605z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m7.79251,18.0225c0-1.0575.855-1.9125,1.9125-1.9125,1.05749,0,1.91249.855,1.91249,1.9125s-.855,1.9125-1.91249,1.9125c-1.0575,0-1.9125-.855-1.9125-1.9125z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m12.3,18.0225c0-1.0575.855-1.9125,1.9125-1.9125s1.9125.855,1.9125,1.9125-.855,1.9125-1.9125,1.9125S12.3,19.08,12.3,18.0225z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m21,3v.375H3V3h18z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m3,21v-.7125h18V21H3z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m2.85001,16.3125V16.2h4.125v2.6625h-4.125v-2.55z" fill="#fff"></path>
          </symbol>
          <symbol id='utilization-none' viewBox='0 0 19 16'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m2.49997,3.00015c.82699,0,1.49998-.67299,1.49998-1.49998,0-.826995-.67299-1.499987-1.49998-1.499987S.999989.673175.999989,1.50017c0,.82699.672991,1.49998,1.499981,1.49998z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m9.5038,3.00015c.827,0,1.5-.67299,1.5-1.49998,0-.826995-.673-1.499987-1.5-1.499987-.82699,0-1.49999.672992-1.49999,1.499987,0,.82699.673,1.49998,1.49999,1.49998z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m16.5076,3.00015c.827,0,1.5-.67299,1.5-1.49998,0-.826995-.673-1.499987-1.5-1.499987s-1.5.672992-1.5,1.499987c0,.82699.673,1.49998,1.5,1.49998z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m0,9.99958h.999989v5.99992H3.99995V9.99958h.99999V3.99965H0v5.99993z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m7.00383,9.99958h.99998v5.99992h2.99999V9.99958h1V3.99965H7.00383v5.99993z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m13.9998,4.00014v5.99996h1V16h3v-5.9999h1V4.00014h-5z" fill="#bdbdbd"></path>
          </symbol>
          <symbol id='utilization-low' viewBox='0 0 19 16'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m2.49997,3.00015c.82699,0,1.49998-.67299,1.49998-1.49998,0-.826995-.67299-1.499987-1.49998-1.499987S.999989.673175.999989,1.50017c0,.82699.672991,1.49998,1.499981,1.49998z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m0,4.00014v5.99996h.999989V16H3.99995v-5.9999h.99999V4.00014H0z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m9.5038,3.00015c.827,0,1.5-.67299,1.5-1.49998,0-.826995-.673-1.499987-1.5-1.499987-.82699,0-1.49999.672992-1.49999,1.499987,0,.82699.673,1.49998,1.49999,1.49998z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m16.5076,3.00015c.827,0,1.5-.67299,1.5-1.49998,0-.826995-.673-1.499987-1.5-1.499987s-1.5.672992-1.5,1.499987c0,.82699.673,1.49998,1.5,1.49998z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m7.00383,9.99958h.99998v5.99992h2.99999V9.99958h1V3.99965H7.00383v5.99993z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m13.9998,4.00014v5.99996h1V16h3v-5.9999h1V4.00014h-5z" fill="#bdbdbd"></path>
          </symbol>
          <symbol id='utilization-medium' viewBox='0 0 19 16'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m2.49997,3.00015c.82699,0,1.49998-.67299,1.49998-1.49998,0-.826995-.67299-1.499987-1.49998-1.499987S.999989.673175.999989,1.50017c0,.82699.672991,1.49998,1.499981,1.49998z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m0,4.00014v5.99996h.999989V16H3.99995v-5.9999h.99999V4.00014H0z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m9.5038,3.00015c.827,0,1.5-.67299,1.5-1.49998,0-.826995-.673-1.499987-1.5-1.499987-.82699,0-1.49999.672992-1.49999,1.499987,0,.82699.673,1.49998,1.49999,1.49998z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m7.00383,4.00014v5.99996h.99998V16h2.99999v-5.9999h1V4.00014H7.00383z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m16.5076,3.00015c.827,0,1.5-.67299,1.5-1.49998,0-.826995-.673-1.499987-1.5-1.499987s-1.5.672992-1.5,1.499987c0,.82699.673,1.49998,1.5,1.49998z" fill="#bdbdbd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m13.9998,4.00014v5.99996h1V16h3v-5.9999h1V4.00014h-5z" fill="#bdbdbd"></path>
          </symbol>
          <symbol id='utilization-high' viewBox='0 0 19 16'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m2.49997,3.00015c.82699,0,1.49998-.67299,1.49998-1.49998,0-.826995-.67299-1.499987-1.49998-1.499987S.999989.673175.999989,1.50017c0,.82699.672991,1.49998,1.499981,1.49998z" fill="#eb0000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m9.5038,3.00015c.827,0,1.5-.67299,1.5-1.49998,0-.826995-.673-1.499987-1.5-1.499987-.82699,0-1.49999.672992-1.49999,1.499987,0,.82699.673,1.49998,1.49999,1.49998z" fill="#eb0000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m16.5076,3.00015c.827,0,1.5-.67299,1.5-1.49998,0-.826995-.673-1.499987-1.5-1.499987s-1.5.672992-1.5,1.499987c0,.82699.673,1.49998,1.5,1.49998z" fill="#eb0000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m0,9.99958h.999989v5.99992H3.99995V9.99958h.99999V3.99965H0v5.99993z" fill="#eb0000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m7.00383,9.99958h.99998v5.99992h2.99999V9.99958h1V3.99965H7.00383v5.99993z" fill="#eb0000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m13.9998,4.00014v5.99996h1V16h3v-5.9999h1V4.00014h-5z" fill="#eb0000"></path>
          </symbol>
          <symbol id='walk-small' viewBox='0 0 24 24'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m11.5,4.99976c-.2569,0-.5.24314-.5.5,0,.25753.2428.5.5.5s.5-.24247.5-.5c0-.25686-.2431-.5-.5-.5zm-1.5.5c0-.80915.6909-1.5,1.5-1.5s1.5.69085,1.5,1.5c0,.81046-.6912,1.5-1.5,1.5s-1.5-.68954-1.5-1.5zm1,3.5v4.00004h1V8.99976h-1zm-1,.43425v6.91439l-1.91603,2.874.83206.5547,1.99997-3,.084-.126v-2.6513h1.2929L14,15.7069v4.2929h1v-4.7072l-2-2V9.70686l1.1464,1.14644.1465.1465H17V9.99976h-2.2929L12.8536,8.1462l-.1465-.14644h-2.3585l-.126.08397L7.22265,10.0837,7,10.2322v3.7676h1v-3.2325l2-1.33329z"></path>
          </symbol>
        </svg>
      </div>
    );
  }
}

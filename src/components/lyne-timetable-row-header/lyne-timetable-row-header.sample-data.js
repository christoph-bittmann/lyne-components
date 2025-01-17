import transportationNumberData from '../lyne-timetable-transportation-number/lyne-timetable-transportation-number.sample-data';
import transportationTimeData from '../lyne-timetable-transportation-time/lyne-timetable-transportation-time.sample-data';

export default [
  {
    departure: {
      direction: transportationNumberData['train'].direction,
      productMarketingName: transportationNumberData['train'].marketingName,
      productText: transportationNumberData['train'].product.text,
      time: transportationTimeData[0].time
    }
  },
  {
    departure: {
      direction: transportationNumberData['cableCar'].direction,
      productMarketingName: transportationNumberData['cableCar'].marketingName,
      productText: transportationNumberData['cableCar'].product.text,
      time: transportationTimeData[2].time
    }
  }
];

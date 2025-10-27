// import { Component, OnInit, NgZone } from '@angular/core';

// @Component({
//   selector: 'app-geomaps',
//   templateUrl: './geomaps.html',
//   styleUrls: ['./geomaps.scss'],
//   standalone: false,
// })
// export class GeomapsComponent implements OnInit {

//   // public mapData: CountriesData = {};

//   // constructor(private ngZone: NgZone) {}

//   // ngOnInit(): void {
//   //   this.initializeMapData();
//   // }


//   // initializeMapData(): void {
//   //   const countryCodeMap: { [key: string]: string } = {
//   //     'Germany': 'DE',
//   //     'United States': 'US',
//   //     'Brazil': 'BR',
//   //     'Canada': 'CA',
//   //     'India': 'IN',
//   //     'Antartica': 'AQ',
//   //     'Ireland': 'IE',
//   //     'France': 'FR',
//   //     'RU': 'RU',
//   //   };




//   //   const originalData = [
//   //     ['Country', 'Popularity'],
//   //     ['Germany', 200],
//   //     ['United States', 300],
//   //     ['Brazil', 400],
//   //     ['Canada', 500],
//   //     ['India', 299],
//   //     ['Antartica', 100],
//   //     ['Ireland', 700],
//   //     ['France', 600],
//   //     ['RU', 900],
//   //   ];


//   //   const transformedData: CountriesData = {};
//   //   for (let i = 1; i < originalData.length; i++) {
//   //     const countryName = originalData[i][0] as string;
//   //     const popularity = originalData[i][1] as number;
//   //     const countryCode = countryCodeMap[countryName];

//   //     if (countryCode) {
//   //       transformedData[countryCode] = { 'value': popularity };
//   //     }
//   //   }

//   //   this.mapData = transformedData;
//   // }


//   // error(event: ChartErrorEvent): void {
//   //   console.error('Map Chart Error:', event.message, event.detailedMessage);
//   // }
// }

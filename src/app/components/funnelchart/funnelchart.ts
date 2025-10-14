import { Component } from '@angular/core';
import { AgChartOptions, AgCartesianSeriesOptions } from 'ag-charts-community';
import { getData } from '../../models/charts';

@Component({
  selector: 'app-funnelcharts',
  templateUrl: './funnelchart.html',
  styleUrls: ['./funnelchart.scss'],
  standalone:false,
})
export class FunnelchartComponent {
  public chartOptions: AgChartOptions;

  constructor() {
    this.chartOptions = this.createBarChartOptions(getData());
  }

  // Modular method to create a bar chart
  private createBarChartOptions(data: any[]): AgChartOptions {
    const series: AgCartesianSeriesOptions[] = [
      {
        type: 'bar', // lowercase for community version
        xKey: 'group',
        yKey: 'value',
        fill: '#5090DC',
      },
    ];

    return {
      data,
      title: {
        text: 'Revenue Open by Sales Stage',
      },
      series,
    };
  }
}

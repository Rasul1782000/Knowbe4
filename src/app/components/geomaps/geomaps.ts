import { Component, OnInit, NgZone } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-geomaps',
  templateUrl: './geomaps.html',
  styleUrls: ['./geomaps.scss'],
  standalone:false,
})
export class GeomapsComponent implements OnInit {

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.loadGoogleCharts();
  }

  loadGoogleCharts() {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.onload = () => this.drawRegionsMap();
    document.head.appendChild(script);
  }

  drawRegionsMap() {
    google.charts.load('current', {
      packages: ['geochart'],
    });
    google.charts.setOnLoadCallback(() => {
      const data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['India',299],
        ['Antartica', 100],
        ['Ireland', 700],
        ['France', 600],
        ['RU', 900]
      ]);

      const options = {
        colorAxis: { colors: ['#e0f2f1', '#00796b'] }
      };

      const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      chart.draw(data, options);
    });
  }
}

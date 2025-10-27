import { Component, OnInit, ChangeDetectorRef, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppConfigService } from '../../service/services/appconfig.service';
import { DesignerService } from '../../service/services/designer.service';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.html',
  styleUrls: ['./reports.scss'],

})
export class ReportsPage implements OnInit {
  data: any;
  options: any;

  platformId = inject(PLATFORM_ID);
  configService = inject(AppConfigService);
  designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) { }

  // Automatically re-initialize chart when theme or preset changes
  themeEffect = effect(() => {
    if (this.configService.transitionComplete()) {
      if (this.designerService.preset()) {
        this.initChart();
      }
    }
  });

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            type: 'bar',
            label: 'Dataset 1',
            backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            data: [50, 25, 12, 48, 90, 76, 42]
          },
          {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
            data: [21, 84, 24, 75, 37, 65, 34]
          },
          {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
            data: [41, 52, 24, 74, 23, 21, 32]
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            stacked: true,
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };

      this.cd.markForCheck();
    }
  }
}

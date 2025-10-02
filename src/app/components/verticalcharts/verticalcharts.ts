import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '../../service/services/appconfig.service';
import { isPlatformBrowser } from '@angular/common';
import { DesignerService } from '../../service/services/designer.service';

@Component({
  selector: 'app-Verticalcharts',
  templateUrl: './Verticalcharts.html',
  styleUrl: './Verticalcharts.scss',
  standalone: false,
})
export class VerticalchartsComponent implements OnInit {
  data: any;
  options: any;

  platformId = inject(PLATFORM_ID);
  configService = inject(AppConfigService);
  designerService: DesignerService = inject(DesignerService) as DesignerService;

  constructor(private cd: ChangeDetectorRef) { }

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
            label: 'My First dataset',
            backgroundColor: '#00C4CC', // Changed to cyan from the image
            borderColor: '#00C4CC',
            textColor: 'black',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#808080', // Changed to gray from the image
            borderColor: '#808080',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
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
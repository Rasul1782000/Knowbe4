import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { ReportsPage } from './reports';

@NgModule({
  declarations: [ReportsPage],
  imports: [CommonModule, ComponentsModule],
})
export class ReportsModule {}

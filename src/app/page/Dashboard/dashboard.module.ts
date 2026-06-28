import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { DashboardPage } from './dashboard';

@NgModule({
  declarations: [DashboardPage],
  imports: [CommonModule, ComponentsModule],
})
export class DashboardModule {}

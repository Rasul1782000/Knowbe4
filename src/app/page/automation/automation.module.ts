import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { AutomationPage } from './automation';

@NgModule({
  declarations: [AutomationPage],
  imports: [CommonModule, ComponentsModule],
})
export class AutomationModule {}

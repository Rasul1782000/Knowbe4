import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { ServicesPage } from './services';

@NgModule({
  declarations: [ServicesPage],
  imports: [CommonModule, ComponentsModule],
})
export class ServicesModule {}

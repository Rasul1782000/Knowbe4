import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { ViewPage } from './View';

@NgModule({
  declarations: [ViewPage],
  imports: [CommonModule, ComponentsModule],
})
export class ViewModule {}

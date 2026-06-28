import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { IntegrationPage } from './integration';

@NgModule({
  declarations: [IntegrationPage],
  imports: [CommonModule, ComponentsModule],
})
export class IntegrationModule {}

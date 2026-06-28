import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentsModule } from '../../components/components-module';
import { SettingsPage } from './settings';
import { BasicinfoPage } from '../basicinfo/basicinfo';
import { BillingPage } from '../billing/billing';
import { ModePage } from '../mode/mode';
import { MembershipPage } from '../membership/membership';

@NgModule({
  declarations: [
    SettingsPage,
    BasicinfoPage,
    BillingPage,
    ModePage,
    MembershipPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    ComponentsModule,
  ],
})
export class SettingsModule {}

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
// import { VerifyOTpage } from './verifyotppage';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components-module';
import { MeterGroup } from 'primeng/metergroup';
import { CardModule } from 'primeng/card';


@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule,MeterGroup, CardModule, TableModule, ButtonModule, HttpClientModule, ComponentsModule,],
    exports: [],
})
export class VerifyOTpageModule { }

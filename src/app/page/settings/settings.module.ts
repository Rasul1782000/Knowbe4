import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Settings } from './settings';
import { ComponentsModule } from '../../components/components-module';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';






@NgModule({
    declarations: [Settings],
    imports: [
        CommonModule, FormsModule, HttpClientModule, ComponentsModule
    ],
    exports: [BreadcrumbsComponent]
})
export class SettingsModule { }

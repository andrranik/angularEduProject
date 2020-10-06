import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [SettingsComponent],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        FlexModule,
        ReactiveFormsModule
    ]
})
export class SettingsModule { }

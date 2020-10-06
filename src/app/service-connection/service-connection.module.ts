import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceConnectionRoutingModule } from './service-connection-routing.module';
import { ServiceConnectionComponent } from './service-connection.component';
import {FlexModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ServiceConnectionComponent],
    imports: [
        CommonModule,
        ServiceConnectionRoutingModule,
        FlexModule,
        ReactiveFormsModule
    ]
})
export class ServiceConnectionModule { }

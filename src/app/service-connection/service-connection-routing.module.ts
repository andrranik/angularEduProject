import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceConnectionComponent } from './service-connection.component';

const routes: Routes = [{ path: '', component: ServiceConnectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceConnectionRoutingModule { }

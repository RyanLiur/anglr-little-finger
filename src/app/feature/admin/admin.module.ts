import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';


@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManageCustomersComponent, ManageOrdersComponent, ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

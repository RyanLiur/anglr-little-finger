import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: AdminDashboardComponent,
          },
          {
            path: 'customers',
            component: ManageCustomersComponent,
          },
          {
            path: 'orders',
            component: ManageOrdersComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

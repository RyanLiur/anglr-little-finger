import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadMainFootLayoutComponent } from './head-main-foot-layout/head-main-foot-layout.component';
import { PageNotFoundComponent } from 'src/app/error/page-not-found/page-not-found.component';
import { ComposeMessageComponent } from '../message/compose-message/compose-message.component';
import { SecondMessageComponent } from '../message/second-message/second-message.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HeadMainFootLayoutComponent,
    children: [
      // preload module
      {
        path: 'customers',
        loadChildren: 'src/app/feature/customers/customers.module#CustomersModule',
        data: {
          preload: true
        }
      },
      // not preload module
      {
        path: 'orders',
        loadChildren: 'src/app/feature/orders/orders.module#OrdersModule',
        // because default is false
        // data: {
        //   preload: false
        // }
      },
      {
        path: 'admin',
        loadChildren: 'src/app/feature/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'double-send',
    component: SecondMessageComponent,
    outlet: 'popup'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

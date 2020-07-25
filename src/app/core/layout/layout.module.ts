import { AdminModule } from './../../feature/admin/admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeadMainFootLayoutComponent } from './head-main-foot-layout/head-main-foot-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HeadMainFootLayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BrowserAnimationsModule,
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from '../error/page-not-found/page-not-found.component';
import { LayoutModule } from './layout/layout.module';
import { SecondMessageComponent } from './message/second-message/second-message.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    SecondMessageComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule
  ],
  exports: [LayoutModule]
})
export class CoreModule { }

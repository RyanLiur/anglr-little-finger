import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaService } from './core/service/meta.service';
import { SysErrorComponent } from './error/sys-error/sys-error.component';
import { CoreModule } from './core/core.module';
import { ComposeMessageComponent } from './core/message/compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SysErrorComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
  ],
  providers: [
    MetaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    // TODO 可以把 enableTracing: true 选项作为第二个参数，这会把每个导航生命周期中发生的每个路由器事件都输出到浏览器控制台中。enableTracing 只会用于调试目的。
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => {
    //   return (typeof value === 'function') ? value.name : value;
    // };
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

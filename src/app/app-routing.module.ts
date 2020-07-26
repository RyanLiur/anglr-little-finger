import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysErrorComponent } from './error/sys-error/sys-error.component';
import { SimpleLoadingStrategy } from './core/service/simple-loading-strategy';


const routes: Routes = [
  {
    path: 'error/sys-error',
    component: SysErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: SimpleLoadingStrategy,
    // for output routing log
    // enableTracing: true // <-- debugging purposes only
  })],
  providers: [SimpleLoadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule { }

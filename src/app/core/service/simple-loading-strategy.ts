import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SimpleLoadingStrategy implements PreloadingStrategy {
  preloadingModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      this.preloadingModules.push(route.path);
      return load();
    }
    return of(null);
  }
}

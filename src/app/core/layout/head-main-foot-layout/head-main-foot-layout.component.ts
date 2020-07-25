import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../animation/route';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-head-main-foot-layout',
  templateUrl: './head-main-foot-layout.component.html',
  styleUrls: ['./head-main-foot-layout.component.scss'],
  animations: [slideInAnimation]
})
export class HeadMainFootLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData
      && outlet.activatedRouteData.animation;
  }
}

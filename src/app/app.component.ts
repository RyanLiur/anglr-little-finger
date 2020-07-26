import { MetaService } from './core/service/meta.service';
import { Component, SimpleChanges, ChangeDetectorRef, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Big-B';

  constructor(
    private readonly meta: MetaService,
  ) {

  }

  ngOnInit() {
    this.meta.addTag();
  }
}

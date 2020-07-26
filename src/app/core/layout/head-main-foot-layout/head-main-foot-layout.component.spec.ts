import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMainFootLayoutComponent } from './head-main-foot-layout.component';

describe('HeadMainFootLayoutComponent', () => {
  let component: HeadMainFootLayoutComponent;
  let fixture: ComponentFixture<HeadMainFootLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadMainFootLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMainFootLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

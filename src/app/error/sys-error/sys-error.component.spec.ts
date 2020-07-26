import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysErrorComponent } from './sys-error.component';

describe('SysErrorComponent', () => {
  let component: SysErrorComponent;
  let fixture: ComponentFixture<SysErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

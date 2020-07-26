import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMessageComponent } from './second-message.component';

describe('SecondMessageComponent', () => {
  let component: SecondMessageComponent;
  let fixture: ComponentFixture<SecondMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

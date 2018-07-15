import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WideWidgetComponent } from './wide-widget.component';

describe('WideWidgetComponent', () => {
  let component: WideWidgetComponent;
  let fixture: ComponentFixture<WideWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WideWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WideWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

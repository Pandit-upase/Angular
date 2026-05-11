import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoC1Component } from './demo-c1.component';

describe('DemoC1Component', () => {
  let component: DemoC1Component;
  let fixture: ComponentFixture<DemoC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoC1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

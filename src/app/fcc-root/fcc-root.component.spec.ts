import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FccRootComponent } from './fcc-root.component';

describe('FccRootComponent', () => {
  let component: FccRootComponent;
  let fixture: ComponentFixture<FccRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FccRootComponent]
    });
    fixture = TestBed.createComponent(FccRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

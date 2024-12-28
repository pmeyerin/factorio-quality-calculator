import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryDesignerComponent } from './factory-designer.component';

describe('FactoryDesignerComponent', () => {
  let component: FactoryDesignerComponent;
  let fixture: ComponentFixture<FactoryDesignerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactoryDesignerComponent]
    });
    fixture = TestBed.createComponent(FactoryDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

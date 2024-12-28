import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclerDesignerComponent } from './recycler-designer.component';

describe('RecyclerDesignerComponent', () => {
  let component: RecyclerDesignerComponent;
  let fixture: ComponentFixture<RecyclerDesignerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecyclerDesignerComponent]
    });
    fixture = TestBed.createComponent(RecyclerDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

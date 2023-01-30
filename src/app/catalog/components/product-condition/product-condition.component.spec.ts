import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConditionComponent } from './product-condition.component';

describe('ProductConditionComponent', () => {
  let component: ProductConditionComponent;
  let fixture: ComponentFixture<ProductConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

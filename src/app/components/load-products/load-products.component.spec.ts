import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadProductsComponent } from './load-products.component';

describe('LoadProductsComponent', () => {
  let component: LoadProductsComponent;
  let fixture: ComponentFixture<LoadProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadProductsComponent]
    });
    fixture = TestBed.createComponent(LoadProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

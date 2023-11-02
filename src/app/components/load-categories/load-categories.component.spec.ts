import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCategoriesComponent } from './load-categories.component';

describe('LoadCategoriesComponent', () => {
  let component: LoadCategoriesComponent;
  let fixture: ComponentFixture<LoadCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadCategoriesComponent]
    });
    fixture = TestBed.createComponent(LoadCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

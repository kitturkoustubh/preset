import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPresetComponent } from './filter-preset.component';

describe('FilterPresetComponent', () => {
  let component: FilterPresetComponent;
  let fixture: ComponentFixture<FilterPresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

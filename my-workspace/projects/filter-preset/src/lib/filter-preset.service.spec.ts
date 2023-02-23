import { TestBed } from '@angular/core/testing';

import { FilterPresetService } from './filter-preset.service';

describe('FilterPresetService', () => {
  let service: FilterPresetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPresetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TabauxiliarService } from './tabauxiliar.service';

describe('TabauxiliarService', () => {
  let service: TabauxiliarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabauxiliarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

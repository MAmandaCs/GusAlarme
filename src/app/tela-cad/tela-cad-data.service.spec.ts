import { TestBed } from '@angular/core/testing';

import { TelaCadDataService } from './tela-cad-data.service';

describe('TelaCadDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelaCadDataService = TestBed.get(TelaCadDataService);
    expect(service).toBeTruthy();
  });
});

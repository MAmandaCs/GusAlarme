import { TestBed } from '@angular/core/testing';
import { TelaCadService } from './tela-cad.service';

describe('TelaCadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelaCadService = TestBed.get(TelaCadService);
    expect(service).toBeTruthy();
  });
});

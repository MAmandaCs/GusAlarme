import { TestBed } from '@angular/core/testing';

import { TelaCadastroDataService } from './tela-cadastro-data.service';

describe('TelaCadastroDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelaCadastroDataService = TestBed.get(TelaCadastroDataService);
    expect(service).toBeTruthy();
  });
});

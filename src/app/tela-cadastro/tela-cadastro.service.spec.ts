import { TestBed } from '@angular/core/testing';
import { TelaCadastroService } from './tela-cadastro.service';


describe('TelaCadastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelaCadastroService = TestBed.get(TelaCadastroService);
    expect(service).toBeTruthy();
  });
});

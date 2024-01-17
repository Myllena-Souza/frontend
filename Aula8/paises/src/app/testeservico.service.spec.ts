import { TestBed } from '@angular/core/testing';

import { TesteservicoService } from './testeservico.service';

describe('TesteservicoService', () => {
  let service: TesteservicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteservicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

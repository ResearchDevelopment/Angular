import { TestBed } from '@angular/core/testing';

import { VocabsService } from './vocabs.service';

describe('VocabsService', () => {
  let service: VocabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

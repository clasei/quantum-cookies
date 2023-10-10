import { TestBed } from '@angular/core/testing';

import { FeynmanSaysService } from './feynman-says.service';

describe('FeynmanSaysService', () => {
  let service: FeynmanSaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeynmanSaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

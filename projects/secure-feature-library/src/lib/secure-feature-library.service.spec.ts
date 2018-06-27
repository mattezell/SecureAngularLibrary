import { TestBed, inject } from '@angular/core/testing';

import { SecureFeatureLibraryService } from './secure-feature-library.service';

describe('SecureFeatureLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureFeatureLibraryService]
    });
  });

  it('should be created', inject([SecureFeatureLibraryService], (service: SecureFeatureLibraryService) => {
    expect(service).toBeTruthy();
  }));
});

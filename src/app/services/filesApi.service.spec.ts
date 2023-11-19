/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilesApiService } from './filesApi.service';

describe('Service: FilesApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesApiService]
    });
  });

  it('should ...', inject([FilesApiService], (service: FilesApiService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PdfGeneratorApiService } from './pdfGeneratorApi.service';

describe('Service: PdfGeneratorApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfGeneratorApiService]
    });
  });

  it('should ...', inject([PdfGeneratorApiService], (service: PdfGeneratorApiService) => {
    expect(service).toBeTruthy();
  }));
});

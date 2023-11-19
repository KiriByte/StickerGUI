import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorApiService {
  private apiUrl = 'http://192.168.1.6:81/api/PDFDocument/';

  constructor(private http: HttpClient) {}

  generate(): Observable<any> {
    return this.http.get(this.apiUrl + 'Generate?pageSettingsId=' + 0);
  }

  downloadFile(): Observable<any> {
    return this.http.get(this.apiUrl + 'GetFile?id=0' + 0);
  }
}

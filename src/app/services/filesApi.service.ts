import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesApiService {
  private apiUrl = 'http://192.168.1.6:81/api/FileDownloader/';

  constructor(private http: HttpClient) {}

  public downloadFile(name: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/pdf',
    });
    return this.http.get(this.apiUrl + 'DownloadFile?fileName=' + name, {
      headers: headers,
      reportProgress: true,
      responseType: 'blob',
    });
  }

  public getFilesNames(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'GetFilesNames');
  }
}

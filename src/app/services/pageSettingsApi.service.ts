import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPageSettings } from 'src/app/models/pageSettings.model';

@Injectable({
  providedIn: 'root',
})
export class PageSettingsApiService {
  private apiUrl = 'http://192.168.1.6:81/api/PageSettings/';

  constructor(private http: HttpClient) {}

  getStickers(): Observable<IPageSettings[]> {
    return this.http.get<IPageSettings[]>(this.apiUrl + 'GetPageSettings');
  }

  addPageSettings(pageSettings: IPageSettings): Observable<any> {
    return this.http.post(this.apiUrl + 'AddPageSettings', pageSettings);
  }

  changePageSettings(pageSettings: IPageSettings): Observable<any> {
    return this.http.put(this.apiUrl + 'ChangePageSettings', pageSettings);
  }

  clearAll(): Observable<any> {
    return this.http.delete(this.apiUrl + 'ClearAll');
  }
  deleteModel(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'DeleteByID?id=' + id);
  }
}

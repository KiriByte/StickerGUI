import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStickerAmount } from '../models/stickerAmount.model';

@Injectable({
  providedIn: 'root',
})
export class StickerApiService {
  private apiUrl = 'http://192.168.1.6:81/api/Sticker/';

  constructor(private http: HttpClient) {}

  getStickers(): Observable<IStickerAmount[]> {
    return this.http.get<IStickerAmount[]>(this.apiUrl + 'GetStickers');
  }

  deleteModel(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'DeleteModel?id=' + id);
  }

  addModel(sticker: IStickerAmount): Observable<any> {
    return this.http.post(this.apiUrl + 'AddModel', sticker);
  }
}

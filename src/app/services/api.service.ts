import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISticker } from '../models/sticker.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://192.168.1.5:5063/api/Sticker/'; // Замените на свой API URL

  constructor(private http: HttpClient) {}

  getStickers(): Observable<ISticker[]> {
    return this.http.get<ISticker[]>(this.apiUrl+'GetStickers');
  }

  deleteModel(id: number):Observable<any>{
    return this.http.delete(this.apiUrl+'DeleteModel?id='+id);
  }
}
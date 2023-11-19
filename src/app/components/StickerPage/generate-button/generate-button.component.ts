import { Component } from '@angular/core';
import { PdfGeneratorApiService } from 'src/app/services/pdfGeneratorApi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'generate-button',
  templateUrl: './generate-button.component.html',
  styleUrls: ['./generate-button.component.scss'],
})
export class GenerateButtonComponent {
  message: string = '';
  progress: number = 0;
  someArray: any[] = [];
  constructor(
    private pdfGeneratorApi: PdfGeneratorApiService,
    private http: HttpClient
  ) {}

  generate(): void {
    this.pdfGeneratorApi.generate().subscribe(() => {});
  }

  download(name: string): void {
    console.log(name);
  }

  test(): void {
    this.http.get('http://192.168.1.6:81/api/FileDownloader/Download');
  }
}

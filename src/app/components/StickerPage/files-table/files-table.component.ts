import { Component, OnInit } from '@angular/core';
import { FilesApiService } from 'src/app/services/filesApi.service';
import { saveAs } from 'file-saver-es';

@Component({
  selector: 'files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.css'],
})
export class FilesTableComponent implements OnInit {
  fileNames: string[] = [];

  constructor(private filesApi: FilesApiService) {}

  ngOnInit() {
    this.getFilesNames();
  }

  getFilesNames = () => {
    this.filesApi.getFilesNames().subscribe((response) => {
      this.fileNames = response;
    });
  };

  downloadFile(name: string): void {
    console.log(name);
    this.filesApi.downloadFile(name).subscribe((response) => {
      saveAs(response, name);
    });
  }
}

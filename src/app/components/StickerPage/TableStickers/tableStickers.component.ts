import { Component, OnInit } from '@angular/core';
import { ISticker } from '../../../models/sticker.model';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-stickers',
  templateUrl: './tableStickers.component.html',
})
export class TableStickers implements OnInit {
  stickers: ISticker[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.refreshTable();
  }

  deleteModel(id: number) {
    this.apiService.deleteModel(id).subscribe(() => {
      this.refreshTable();
    });
  }

  refreshTable(): void {
    this.apiService.getStickers().subscribe((stickers: ISticker[]) => {
      this.stickers = stickers;
    });
  }
}

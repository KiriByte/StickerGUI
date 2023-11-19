import { Component, OnInit } from '@angular/core';
import { IStickerAmount } from 'src/app/models/stickerAmount.model';
import { StickerApiService } from 'src/app/services/stickerApi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-stickers',
  templateUrl: './table-stickers.component.html',
})
export class TableStickers implements OnInit {
  stickers: IStickerAmount[] = [];

  constructor(private apiService: StickerApiService) {}

  ngOnInit(): void {
    this.refreshTable();
  }

  deleteModel(id: number) {
    this.apiService.deleteModel(id).subscribe(() => {
      this.refreshTable();
    });
  }

  refreshTable(): void {
    this.apiService.getStickers().subscribe((stickers: IStickerAmount[]) => {
      this.stickers = stickers;
    });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { ISticker } from 'src/app/models/sticker.model';
import { StickerApiService } from 'src/app/services/stickerApi.service';
import { IStickerAmount } from 'src/app/models/stickerAmount.model';

@Component({
  selector: 'add-form',
  templateUrl: 'add-form.component.html',
})
export class AddFormComponent {
  stickers: IStickerAmount = {
    id: 0,
    amount: 0,
    sticker: {} as ISticker,
  };

  constructor(private stickerApiService: StickerApiService) {}

  @Output() addedModel: EventEmitter<void> = new EventEmitter<void>();

  onSubmit(): void {
    this.stickerApiService.addModel(this.stickers).subscribe(() => {
      this.addedModel.emit();
    });
  }

  calculateFinalPrice(): void {
    this.stickers.sticker.finalPrice =
      this.stickers.sticker.amount * this.stickers.sticker.price;
  }
}

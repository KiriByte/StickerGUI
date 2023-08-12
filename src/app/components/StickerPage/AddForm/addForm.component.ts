import { Component, EventEmitter, Output } from '@angular/core';
import { ISticker } from 'src/app/models/sticker.model';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'add-Form',
  templateUrl: 'addForm.component.html',
})
export class AddFormComponent {
  sticker: ISticker = {
    id: 0,
    name: '',
    amount: 12,
    price: 0,
    finalPrice: 0,
    amountStickers: 0,
  };

  constructor(private apiService: ApiService) {}

  @Output() addedModel: EventEmitter<void> = new EventEmitter<void>();

  onSubmit(): void {
    this.apiService.addModel(this.sticker).subscribe(() => {
      this.addedModel.emit();
    });
  }

  calculateFinalPrice(): void {
    this.sticker.finalPrice = this.sticker.amount * this.sticker.price;
  }
}

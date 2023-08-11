import { Component } from '@angular/core';
import { ISticker } from 'src/app/models/sticker.model';

@Component({
  selector: 'add-Form',
  templateUrl: 'addForm.component.html',
})
export class AddFormComponent {
sticker: ISticker = { id: 0, name: '', amount: 12, price: 0, finalPrice: 0, amountStickers: 0 };

  onSubmit(): void {
    console.log('hello world');
  }

  calculateFinalPrice(): void {
    this.sticker.finalPrice = this.sticker.amount * this.sticker.price;
  }
}

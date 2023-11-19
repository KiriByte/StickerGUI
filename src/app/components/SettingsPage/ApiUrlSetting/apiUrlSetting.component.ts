import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'apiUrlSetting',
  templateUrl: './apiUrlSetting.component.html'
})
export class TextInputComponent {
  inputText: string = '';

  handleClick() {
    console.log(this.inputText);
    // Дополнительная обработка введенного текста
    this.inputText = ''; // Очистить поле ввода после нажатия кнопки
  }
}
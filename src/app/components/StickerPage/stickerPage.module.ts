import { NgModule } from '@angular/core';
import { TableStickers } from './TableStickers/tableStickers.component';
import { StickerPageComponent } from './stickerPage.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AddFormComponent } from './AddForm/addForm.component';

@NgModule({
  declarations: [TableStickers, StickerPageComponent, AddFormComponent],
  imports: [
    // Другие импорты модулей
    FormsModule, CommonModule
  ]
})
export class StickerPageModule {}

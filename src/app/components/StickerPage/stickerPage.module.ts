import { NgModule } from '@angular/core';
import { TableStickers } from './table-stickers/table-stickers.component';
import { StickerPageComponent } from './stickerPage.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddFormComponent } from './add-form/add-form.component';
import { GenerateButtonComponent } from 'src/app/components/StickerPage/generate-button/generate-button.component';
import { FilesTableComponent } from './files-table/files-table.component';

@NgModule({
  declarations: [
    TableStickers,
    StickerPageComponent,
    AddFormComponent,
    GenerateButtonComponent,
    FilesTableComponent,
  ],
  imports: [
    // Другие импорты модулей
    FormsModule,
    CommonModule,
  ],
})
export class StickerPageModule {}

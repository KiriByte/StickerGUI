import { ISticker } from './sticker.model';

export interface IStickerAmount {
  id: number;
  amount: number;
  sticker: ISticker;
}

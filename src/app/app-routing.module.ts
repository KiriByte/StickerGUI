import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StickerPageComponent} from './components/StickerPage/stickerPage.component'
import { SettingsPage } from "./components/SettingsPage/settingsPage.component";

// определение маршрутов
const routes: Routes =[
  { path: '', component: StickerPageComponent},
  { path: 'settings', component: SettingsPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

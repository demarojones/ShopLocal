import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritesPage } from './favorites.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FavoritesPage }]),
    SharedModule
  ],
  declarations: [FavoritesPage],
  exports: [FavoritesPage]
})
export class FavoritesPageModule {}

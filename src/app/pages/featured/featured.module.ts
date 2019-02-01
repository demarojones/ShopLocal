import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeaturedPage } from './featured.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FeaturedPage }]),
    SharedModule
  ],
  declarations: [FeaturedPage],
  exports: [FeaturedPage]
})
export class FeaturedPageModule {}

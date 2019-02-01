import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageModule } from '../pages/favorites/favorites.module';
import { RatingComponent } from '../components/rating/rating.component';
import { ListingListComponent } from '../components/listing-list/listing-list.component';
import { FeaturedPageModule } from '../pages/featured/featured.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RatingComponent, ListingListComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [RatingComponent, ListingListComponent]
})
export class SharedModule { }

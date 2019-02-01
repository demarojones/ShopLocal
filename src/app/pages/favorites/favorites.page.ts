import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { Listing } from 'src/app/models/listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage extends BasePage implements OnInit {
  listings: Listing[];
  constructor(injector: Injector, private listingSvc: ListingService) {
    super(injector);
  }
  enableMenuSwipe(): boolean {
    return false;
  }

  ngOnInit(): void {
    this.listingSvc.loadFavorites().then( data => {
      this.listings = JSON.parse(data);
    });
  }

  addToFavorites(listing: Listing) {
    const v = this.listings.find((val) => val.id === listing.id);
    v.isFavorite ? v.isFavorite = false : v.isFavorite = true;
    this.listingSvc.addToFavorites(v);
  }

  review(listing: any) {}

  navigate(listing: any) {}

  goToDetails(listing: Listing) {
    this.navigateTo(['listing-detail', listing.id]);
  }

}

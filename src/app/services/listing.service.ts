import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private listingUrl = 'assets/listings.json';
  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  GetListings() {
    return this.http.get(this.listingUrl);
  }

  GetListingDetail(id: string) {
    return this.http.get(this.listingUrl);
  }

  addToFavorites(listing: any) {
    console.log('listing to save: ', listing);
    return this.storage.listing = listing;
  }

  loadFavorites(): Promise<any> {
    return this.storage.listing;
  }

}

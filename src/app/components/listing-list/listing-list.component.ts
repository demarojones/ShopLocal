import { Component, OnInit, Input } from '@angular/core';
import { Listing } from 'src/app/models/listing';
import { ListingService } from 'src/app/services/listing.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {

  @Input() listings: Listing[];

  constructor(private nav: NavController, private listingSvc: ListingService) {
  }

  ngOnInit() {

  }

  addToFavorites(listing: Listing) {
    const v = this.listings.find((val) => val.id === listing.id);
    v.isFavorite ? v.isFavorite = false : v.isFavorite = true;
    this.listingSvc.addToFavorites(v);
  }

  review(listing: any) {}

  navigate(listing: any) {}

  goToDetails(listing: Listing) {
    this.nav.navigateForward(['listing-detail', listing.id]);
  }

}

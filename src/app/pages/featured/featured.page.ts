import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/listing.service';
import { Listing } from 'src/app/models/listing';

@Component({
  selector: 'app-featured-page',
  templateUrl: 'featured.page.html',
  styleUrls: ['featured.page.scss']
})
export class FeaturedPage implements OnInit {
  listings: Listing[];
  constructor(private listingSvc: ListingService) {
  }

  ngOnInit(): void {
    this.listingSvc.GetListings().subscribe((data: Listing[]) => {
      this.listings = data;
    });
  }

}

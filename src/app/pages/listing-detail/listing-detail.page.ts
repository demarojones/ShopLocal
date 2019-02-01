import { Component, OnInit } from '@angular/core';
import { ListingDetail } from 'src/app/models/listing-detail';
import { ListingService } from 'src/app/services/listing.service';
import { ActivatedRoute } from '@angular/router';
import { Listing } from 'src/app/models/listing';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.page.html',
  styleUrls: ['./listing-detail.page.scss'],
})
export class ListingDetailPage implements OnInit {

  listing: ListingDetail;

  constructor(private listingSvc: ListingService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID: ', id);
    this.listingSvc.GetListingDetail(id).subscribe((data: ListingDetail []) => this.listing = data.filter(val => val.id === id)[0]);
  }

}

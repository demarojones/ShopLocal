export class Listing {
  id?: string;
  place_id?: string;
  name?: string;
  description?: string;
  website?: string;
  types?: string[];
  formatted_address?: string;
  phone?: string;
  opening_hours?: OpeningHours;
  geometry?: Geometry;
  photos?: Photo[];
  icon?: string;
  ratingCount?: number;
  ratingTotal?: number;
  html_attributions?: string[];
  // Action Items
  isFavorite?: boolean;

  // get rating() {
  //   if (!this.ratingCount && !this.ratingTotal) return 0;
  //   return Math.round(this.ratingTotal / this.ratingCount);
  // }
}

export class Geometry {
  location: Location;
}
export class Location {
  lat: number;
  lng: number;
}

export class Photo {
  height: number;
  photo_reference: string;
  width: number;
  html_attributions: string[];
}

export class OpeningHours {
  constructor(open: boolean, weekday_text: string[]) {
    this.open_now = open;
    this.weekday_text = weekday_text;
  }

  open_now: boolean;
  weekday_text: string[];
}

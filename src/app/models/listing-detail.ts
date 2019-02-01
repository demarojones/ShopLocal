import { Listing } from './listing';

export class ListingDetail extends Listing {
    formatted_phone_number?: string;
    reviews?: Review[];
    website?: string;
}

class Review {
    author_name: string;
    profile_photo_url: string;
    text: string;
    time: number;
    relative_time_description: string;
    rating: number;
}

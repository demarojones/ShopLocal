export class Slide {
    image: any;
    sort: number;
    url: string;
    isActive: boolean;
    place: any;

    toString() {
        return this.image.url();
    }
}

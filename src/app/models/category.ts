export class Category {
    id: string;
    name: string;
    type?: string; // Food, services, events, etc
    icon?: string;
    image?: string;
}

/**
 * Group categories by Type
 */
export class CategoryTypeGroup {
    name: string;
    items: Category[];
}

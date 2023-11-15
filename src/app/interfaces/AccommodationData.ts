import { SubcategoryData } from "./SubcategoryData";
import { LocationData } from "./LocationData";
import { RatingData } from "./RatingData";

export interface AccommodationData {
    id: number,
    name: string;
    description: string;
    image:string;
    location: LocationData;
    telephoneNumber: string;   
    website: string;
    subcategories: SubcategoryData[]
    ratings: RatingData[]
}
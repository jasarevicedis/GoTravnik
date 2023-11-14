import { LocationData } from "./LocationData";
import { Rating } from "./RatingData";
import { SubcategoryData } from "./SubcategoryData";

export interface FoodAndDrinkData {
    
    name: string;
    description: string;
    image:string;
    location: LocationData;
    telephoneNumber: string;   
    website: string;
    subcategories: SubcategoryData[]
    ratings: Rating[]

}
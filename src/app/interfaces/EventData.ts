export interface EventData {
    
    name: string;
    description: string;
    image:string;
    address: string;
    
    xCoordinate: number,
    yCoordinate: number,
    
    subcategories: string[];
    startDate: Date;
    endDate: Date;
}
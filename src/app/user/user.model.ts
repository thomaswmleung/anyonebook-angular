export interface Address {
    countryCode:string;
    countryLabel:string;
    districtCode:string;
    districtLabel:string; 
}
export interface User {
    // id: string;
    id: any;
    addresses?:Address[];
    changes: any;
}

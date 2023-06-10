// type Flat = {};

export type Listing = {
  type: 'sell' | 'rent';
  flatType: string;
  address: string;
  gallery: any[];
  rate: number;
  description: string;
  facilities: any[];
  startDate: any;
  endDate: any;
  contact: any;
  status: string;
  discount: number;
  geo: number[];
  user: string;
  liked_by: any[];
  saved_by: string[];

  // document default data
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;

  //
  bedrooms: number;
  bathrooms: number;
  livingRooms: number;
  kitchens: number;
  balconies: number;
};

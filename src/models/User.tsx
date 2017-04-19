export interface GeoModel {
  lat: string;
  lng: string;
}

export interface AddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoModel;
}

export interface CompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: AddressModel;
  company: CompanyModel;
}
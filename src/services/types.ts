export interface TApiResponsePosts {
  userId: number;
  id: number;
  title: string;
  body: string;
  [key: string]: unknown;
}

export interface TApiResponseComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  [key: string]: unknown;
}

export interface TApiResponseUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
  [key: string]: unknown;
}

interface TAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TGeo;
  [key: string]: unknown;
}

interface TGeo {
  lat: string;
  lng: string;
  [key: string]: unknown;
}

interface TCompany {
  name: string;
  catchPhrase: string;
  bs: string;
  [key: string]: unknown;
}

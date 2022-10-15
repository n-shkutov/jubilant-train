export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    zipcode: string;
    geo: { lng: string; lat: string };
    suite: string;
    city: string;
    street: string;
  };
  phone: string;
  website: string;
  company: { bs: string; catchPhrase: string; name: string };
}

export interface ICreateUser extends Pick<IUser, "name" | "email"> {}

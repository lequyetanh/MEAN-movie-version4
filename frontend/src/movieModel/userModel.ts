export interface User{
  id: number;
  name: string;
  email: string;
  like: Array<string>;
  love: Array<string>;
  password: string;
  watchLater: Array<any>;
  favorite: Array<any>;
  avatar: string;
}

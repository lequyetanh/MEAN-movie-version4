export interface User{
    id: number;
    name: string;
    email: string;
    like: Array<string>;
    love: Array<string>;
    password: string;
    watchLater: Array<Object>;
    favorite: Array<Object>;
    avatar: string;
  }
  
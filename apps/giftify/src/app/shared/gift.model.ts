export interface Gift {
  name: string;
  age: {
    min: number;
    max: number;
  };
  price: number;
  imgPath: string;
  category: string;
}

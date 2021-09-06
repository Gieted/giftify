export interface Gift {
  name: string;
  age: {
    ageMin: number;
    ageMax: number;
  };
  price: number;
  imgPath: string;
}

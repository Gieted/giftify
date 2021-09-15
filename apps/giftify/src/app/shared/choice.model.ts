export interface Choice {
  sex?: string;
  age?: number;
  price?: {
    min: number;
    max: number;
  };
  imgPath?: string;
}

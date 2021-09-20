export interface Choice {
  gender?: string;
  age?: number;
  price?: {
    min: number;
    max: number;
  };
  hobby?: string[];
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  tags: string;
  slug: { current: string };
  discountPercentage: number;
  discountedPrice: number;
  isNew: boolean;
  description: string;
  inventory: number;
}

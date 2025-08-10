export interface Cart {
  count: number;
}

export interface Modal {
  open: boolean;
  productName: string;
  reviews: ProductReview[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  reviews: ProductReview[];
  thumbnail: string;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

// types.ts
export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

export type RootStackParamList = {
  Welcome: undefined;
  Menu: { customerName: string; tableNumber: string };
  Cart: { cart: CartItem[]; customerName: string; tableNumber: string };
};

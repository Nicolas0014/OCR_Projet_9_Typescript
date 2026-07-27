export interface PlantOld {
  id: string;
  name: string;
  description: string;
  cover: string;
  category: string;
  water: number;
  light: number;
  price: number;
}

export interface Plant {
  id: string;
  name: string;
  price: number;
}

export interface CartItem extends Plant {
  amount: number;
}

export interface PaymentData {
  amount: number;
}

export interface PromisePaymentData extends PaymentData {
  success: boolean;
  transactionId: string;
  currency: string;
  status: "succeeded" | "failed";
  timestamp: string;
}

export interface PaymentMethod {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface PaymentResult {
  transactionId: string;
  amount: number;
  timestamp: string;
}

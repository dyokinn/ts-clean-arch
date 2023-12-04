import { PaymentMode } from "../enums/PaymentMode"
import Product from "./Product"
import User from "./User"

export default interface Order {
    price: number
    currency: Currency
    paymentMode: PaymentMode
    datePurchased: Date
    shipPreview: Date
    products: Product[]
    user: User
}
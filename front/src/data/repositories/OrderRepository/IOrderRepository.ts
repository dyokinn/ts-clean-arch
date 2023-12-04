import Order from "../../../core/models/Order";
import { IPayStrategy } from "../../stategies/payStrategy/IPayStrategy";

export default interface IOrderRepository {
    getOrders(): Promise<Order[]>
    getOrderById(id: number): Promise<Order[]>
    applyCoupon(order: Order, coupon: string): Promise<Order>
    getTotalPrice(order: Order): Order
    payOrder(order: Order, paymentStrategy: IPayStrategy): Order

}
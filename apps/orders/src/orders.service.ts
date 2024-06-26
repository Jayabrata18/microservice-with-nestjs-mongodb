import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderRequest } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}
  async createOrder(request: CreateOrderRequest) {
    return this.orderRepository.create(request);
  }
}

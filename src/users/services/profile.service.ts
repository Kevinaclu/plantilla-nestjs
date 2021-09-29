import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class ProfileService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>) {}
  ordersByCustomer(customerId: number) {
    return this.orderRepo.find({
      where: {
        customer: customerId,
      },
    });
  }
}

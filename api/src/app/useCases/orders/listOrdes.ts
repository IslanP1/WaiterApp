import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find().sort({ createdAt: 1}).populate('products.product'); //traz todas as informações do produto //ordenar com sorte 1-> crescente, -1 -> decrescente
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
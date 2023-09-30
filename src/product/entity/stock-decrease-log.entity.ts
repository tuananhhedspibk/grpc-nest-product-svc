import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class StockDecreaseLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'integer' })
  public order_id!: number;

  @Column({ type: 'integer' })
  public product_id!: number;

  @ManyToOne(() => Product, (product) => product.stockDecreaseLogs)
  @JoinColumn({ name: 'product_id' })
  public product: Product;
}

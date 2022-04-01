import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  equipmentNumber: number;

  @Column()
  streetAddress: string;

  @Column()
  postcode: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  contractStartDate: Date;

  @Column()
  contractEndDate: Date;

  @Column()
  status: string;
}

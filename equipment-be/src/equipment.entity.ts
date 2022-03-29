import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  equipmentNumber: number;

  @Column()
  address: string;

  @Column()
  contractStartDate: Date;

  @Column()
  contractEndDate: Date;

  @Column()
  status: string;
}

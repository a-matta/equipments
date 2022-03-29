import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { EquipmentStatus } from './equipment.status';

export class CreateEquipmentDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @Type(() => Date)
  @IsDate()
  contractStartDate: Date;

  @Type(() => Date)
  @IsDate()
  contractEndDate: Date;

  @IsEnum(EquipmentStatus)
  status: EquipmentStatus;
}

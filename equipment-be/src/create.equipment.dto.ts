import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { EquipmentStatus } from './equipment.status';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEquipmentDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  address: string;

  @Type(() => Date)
  @IsDate()
  @ApiProperty()
  contractStartDate: Date;

  @Type(() => Date)
  @IsDate()
  @ApiProperty()
  contractEndDate: Date;

  @IsEnum(EquipmentStatus)
  @ApiProperty({ enum: EquipmentStatus })
  status: EquipmentStatus;
}

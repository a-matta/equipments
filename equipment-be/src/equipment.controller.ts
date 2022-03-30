import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEquipmentDto } from './create.equipment.dto';
import { Equipment } from './equipment.entity';

@Controller('equipment')
export class EquipmentController {
  constructor(
    @InjectRepository(Equipment)
    private readonly equipmentRepository: Repository<Equipment>,
  ) {}

  @Get('search')
  searchEquipments(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.equipmentRepository.find({
      take: limit,
    });
  }

  @Get(':equipmentNumber')
  async getEquipment(
    @Param('equipmentNumber', ParseIntPipe) equipmentNumber: number,
  ) {
    const equipment = await this.equipmentRepository.findOne(equipmentNumber);
    if (!equipment) {
      throw new NotFoundException(
        `EquipmentNumber=${equipmentNumber} not found`,
      );
    }
    return equipment;
  }

  @Post()
  createEquipment(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentRepository.save(createEquipmentDto);
  }
}

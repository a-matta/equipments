import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateEquipmentDto } from './create.equipment.dto';
import { AppService } from './equipment.service';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly appService: AppService) {}

  @Get('search')
  searchEquipments(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ): string {
    console.log('limit', limit);
    return 'Equipment search results';
  }

  @Get(':equipmentNumber')
  getEquipment(
    @Param('equipmentNumber', ParseIntPipe) equipmentNumber: number,
  ): string {
    console.log('equipmentNumber', equipmentNumber);
    return 'Equipment Details';
  }

  @Post()
  createEquipment(@Body() createEquipmentDto: CreateEquipmentDto): string {
    console.log(createEquipmentDto);
    return 'Equipment created';
  }
}

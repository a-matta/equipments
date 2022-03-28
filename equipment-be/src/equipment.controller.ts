import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

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
  createEquipment(): string {
    return 'Equipment created';
  }
}

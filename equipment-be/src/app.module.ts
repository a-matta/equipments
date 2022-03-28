import { Module } from '@nestjs/common';
import { EquipmentController } from './equipment.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [EquipmentController],
  providers: [AppService],
})
export class AppModule {}

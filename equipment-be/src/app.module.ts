import { Module } from '@nestjs/common';
import { EquipmentController } from './equipment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from './equipment.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Equipment])],
  controllers: [EquipmentController],
  providers: [TypeOrmModule],
})
export class AppModule {}

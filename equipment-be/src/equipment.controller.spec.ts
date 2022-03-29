import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentController } from './equipment.controller';
import { AppService } from './equipment.service';

describe('EquipmentController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [EquipmentController],
      providers: [AppService],
    }).compile();
  });

  describe('searchEquipments', () => {
    it('should work', () => {
      const controller = app.get<EquipmentController>(EquipmentController);
      expect(controller.searchEquipments(10)).toBe('Equipment search results');
    });
  });

  describe('getEquipment', () => {
    it('should work', () => {
      const controller = app.get<EquipmentController>(EquipmentController);
      expect(controller.getEquipment(1)).toBe('Equipment Details');
    });
  });

  describe('createEquipment', () => {
    it('should work', () => {
      const controller = app.get<EquipmentController>(EquipmentController);
      expect(controller.createEquipment()).toBe('Equipment created');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipmentController } from './equipment.controller';
import { Equipment } from './equipment.entity';
import { EquipmentStatus } from './equipment.status';

describe('EquipmentController', () => {
  let app: TestingModule;
  let controller: EquipmentController;
  let equipmentRepository: Repository<Equipment>;

  const EQUIPMENT_REPOSITORY_TOKEN = getRepositoryToken(Equipment);

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [EquipmentController],
      providers: [
        {
          provide: EQUIPMENT_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = app.get<EquipmentController>(EquipmentController);
    equipmentRepository = app.get<Repository<Equipment>>(
      EQUIPMENT_REPOSITORY_TOKEN,
    );
  });

  describe('searchEquipments', () => {
    it('should work', async () => {
      jest.spyOn(equipmentRepository, 'find').mockImplementationOnce(() =>
        Promise.resolve([
          {
            equipmentNumber: 1,
            address: '',
            contractStartDate: new Date(),
            contractEndDate: new Date(),
            status: EquipmentStatus.Running,
          },
        ]),
      );
      const results = await controller.searchEquipments(10);
      expect(results).toEqual([
        {
          equipmentNumber: 1,
          address: '',
          contractStartDate: new Date(),
          contractEndDate: new Date(),
          status: EquipmentStatus.Running,
        },
      ]);
    });
  });
  describe('searchEquipments', () => {
    it('should work', async () => {
      jest.spyOn(equipmentRepository, 'find').mockImplementationOnce(() =>
        Promise.resolve([
          {
            equipmentNumber: 1,
            address: '',
            contractStartDate: new Date(),
            contractEndDate: new Date(),
            status: EquipmentStatus.Running,
          },
        ]),
      );
      const results = await controller.searchEquipments(10);
      expect(results).toEqual([
        {
          equipmentNumber: 1,
          address: '',
          contractStartDate: new Date(),
          contractEndDate: new Date(),
          status: EquipmentStatus.Running,
        },
      ]);
    });
  });
});

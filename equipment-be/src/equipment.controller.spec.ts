import { NotFoundException } from '@nestjs/common';
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

  const mockEquipment = {
    equipmentNumber: 1,
    address: '',
    contractStartDate: new Date(),
    contractEndDate: new Date(),
    status: EquipmentStatus.Running,
  };

  describe('searchEquipments', () => {
    it('should work', async () => {
      jest
        .spyOn(equipmentRepository, 'find')
        .mockImplementationOnce(() => Promise.resolve([mockEquipment]));
      const results = await controller.searchEquipments(10);
      expect(results).toEqual([mockEquipment]);
    });
  });
  describe('getEquipment', () => {
    it('should return equipment details when it is found', async () => {
      jest
        .spyOn(equipmentRepository, 'findOne')
        .mockImplementationOnce(() => Promise.resolve(mockEquipment));
      const results = await controller.getEquipment(1);
      expect(results).toEqual(mockEquipment);
    });

    it('should throw exception when equipment is not found', async () => {
      await expect(() => controller.getEquipment(12)).rejects.toThrow(
        new NotFoundException('EquipmentNumber=12 not found'),
      );
    });
  });
  describe('createEquipment', () => {
    it('should create new equipment', async () => {
      const createEquipmentDto = {
        address: '11 Vantaa',
        contractStartDate: new Date(),
        contractEndDate: new Date(),
        status: EquipmentStatus.Stopped,
      };
      const equipment = {
        equipmentNumber: 11,
        ...createEquipmentDto,
      };
      jest
        .spyOn(equipmentRepository, 'save')
        .mockImplementationOnce(() => Promise.resolve(equipment));
      const results = await controller.createEquipment(createEquipmentDto);
      expect(results).toEqual(equipment);
    });
  });
});

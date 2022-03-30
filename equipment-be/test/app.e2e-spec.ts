/* 
https://stackoverflow.com/questions/66193796/using-test-database-when-e2e-testing-nestjs

import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('EquipmentController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/equipment/search (GET)', () => {
    return request(app.getHttpServer())
      .get('/equipment/search')
      .expect(200)
      .expect('Equipment search results');
  });

  it('/equipment/:equipmentNumber (GET)', () => {
    return request(app.getHttpServer())
      .get('/equipment/1')
      .expect(200)
      .expect('Equipment Details');
  });

  it('/equipment (POST)', () => {
    return request(app.getHttpServer())
      .post('/equipment')
      .expect(201)
      .expect('Equipment created');
  });
});
*/

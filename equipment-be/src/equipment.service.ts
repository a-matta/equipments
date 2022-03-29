import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getGame(id: number) {
    // return this.equipmentRepository.findOne(id);
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { UesrController } from './uesr.controller';

describe('Uesr Controller', () => {
  let controller: UesrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UesrController],
    }).compile();

    controller = module.get<UesrController>(UesrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

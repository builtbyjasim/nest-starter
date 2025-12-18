import { Test, TestingModule } from '@nestjs/testing';
import { PipeDemoController } from './pipe-demo.controller';

describe('PipeDemoController', () => {
  let controller: PipeDemoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipeDemoController],
    }).compile();

    controller = module.get<PipeDemoController>(PipeDemoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

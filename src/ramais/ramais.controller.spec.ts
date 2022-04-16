import { Test, TestingModule } from '@nestjs/testing';
import { RamaisController } from './ramais.controller';
import { RamaisService } from './ramais.service';

describe('RamaisController', () => {
  let controller: RamaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RamaisController],
      providers: [RamaisService],
    }).compile();

    controller = module.get<RamaisController>(RamaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { RamaisService } from './ramais.service';

describe('RamaisService', () => {
  let service: RamaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RamaisService],
    }).compile();

    service = module.get<RamaisService>(RamaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

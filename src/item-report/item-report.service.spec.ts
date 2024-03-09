import { Test, TestingModule } from '@nestjs/testing';
import { ItemReportService } from './item-report.service';

describe('ItemReportService', () => {
  let service: ItemReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemReportService],
    }).compile();

    service = module.get<ItemReportService>(ItemReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ItemReportController } from './item-report.controller';

describe('ItemReportController', () => {
  let controller: ItemReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemReportController],
    }).compile();

    controller = module.get<ItemReportController>(ItemReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

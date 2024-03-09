import { Module } from '@nestjs/common';
import { ItemReportController } from './item-report.controller';
import { ItemReportService } from './item-report.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemReportSchema } from './schemas/itemReport.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ItemReport', schema:ItemReportSchema}])],
  controllers: [ItemReportController],
  providers: [ItemReportService]
})
export class ItemReportModule {}

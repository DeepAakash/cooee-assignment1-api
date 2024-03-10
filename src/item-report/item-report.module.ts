import { Module } from '@nestjs/common';
import { ItemReportController } from './item-report.controller';
import { ItemReportService } from './item-report.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemReportSchema } from './schemas/itemReport.schema';
import { EventSchema } from 'src/event/schemas/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ItemReport', schema:ItemReportSchema},
      { name: 'Event', schema:EventSchema}])],
  controllers: [ItemReportController],
  providers: [ItemReportService]
})
export class ItemReportModule {}

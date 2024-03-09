import { Module } from '@nestjs/common';
import { ItemReportController } from './item-report.controller';
import { ItemReportService } from './item-report.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemReportSchema } from './schemas/itemReport.schema';
import { EventSchema } from 'src/event/schemas/event.schema';
import { AggrIRSchemaSchema } from './schemas/aggrIR.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ItemReport', schema:ItemReportSchema},
      { name: 'Event', schema:EventSchema},
      { name: 'AggrIRSchema', schema: AggrIRSchemaSchema }])],
  controllers: [ItemReportController],
  providers: [ItemReportService]
})
export class ItemReportModule {}

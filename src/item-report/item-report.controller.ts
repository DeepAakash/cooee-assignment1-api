import { Controller, Get } from '@nestjs/common';
import { ItemReportService } from './item-report.service';
import { ItemReport } from './schemas/itemReport.schema';

@Controller('item-report')
export class ItemReportController {
    constructor(private iRService: ItemReportService){

    }

    @Get()
    async getAllIR(): Promise<AggregatedData[]>{
        return this.iRService.findAll();
    }
}

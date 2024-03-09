import { Controller, Get } from '@nestjs/common';
import { ItemReportService } from './item-report.service';
import { ItemReport } from './schemas/itemReport.schema';
import { AggrIRSchema } from './schemas/aggrIR.schema';

@Controller('item-report')
export class ItemReportController {
    constructor(private iRService: ItemReportService){

    }

    @Get()
    async getAllIR(): Promise<AggrIRSchema[]>{
        return this.iRService.findAll();
    }
}

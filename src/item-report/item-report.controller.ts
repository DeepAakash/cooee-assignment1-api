import { Controller, Get, Query } from '@nestjs/common';
import { ItemReportService } from './item-report.service';
import { ItemReport } from './schemas/itemReport.schema';

// To avoid conflict in the two Query
import {Query as ExpressQuery} from 'express-serve-static-core'

@Controller('item-report')
export class ItemReportController {
    constructor(private iRService: ItemReportService){

    }

    @Get()
    async getAllIR(): Promise<AggregatedData[]>{
        return this.iRService.findAll();
    }

    @Get('search')
    async getAllByName(@Query('keyword') keyword: string): Promise<AggregatedData[]> {
        return this.iRService.findAllByName({ keyword });
    }
}

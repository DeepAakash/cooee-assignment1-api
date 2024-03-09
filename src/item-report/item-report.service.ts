import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ItemReport } from './schemas/itemReport.schema';
import mongoose from 'mongoose';

@Injectable()
export class ItemReportService {
    constructor(
        @InjectModel(ItemReport.name)
        private iRModel: mongoose.Model<ItemReport>
    ){

    }

    async findAll(): Promise<ItemReport[]>{
        const itemReports=await this.iRModel.find();
        return itemReports;
    }
}

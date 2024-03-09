import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class EventService {
    constructor(
        @InjectModel(Event.name)
        private eventModel: mongoose.Model<Event>
    ){
        
    }

    async create(event: Event): Promise<Event>{
        const res=await this.eventModel.create(event);
        return res;
    }
}

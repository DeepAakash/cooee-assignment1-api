import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateEventDTO } from './DTO/create-event.dto';

@Injectable()
export class EventService {
    constructor(
        @InjectModel(Event.name)
        private eventModel: mongoose.Model<Event>
    ){
        
    }

    // Function to create a new entry in the collection 
    async create(event: CreateEventDTO): Promise<Event>{
        try{
            const res = await this.eventModel.create(event);
            return res;
        }catch(error){
            if(error instanceof mongoose.Error.ValidationError){
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            }else{
                throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}

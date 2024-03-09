import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDTO } from './DTO/create-event.dto';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService){

    }

    @Post()
    async createEvent(
        @Body() event: CreateEventDTO,
    ): Promise<Event>{
        return this.eventService.create(event);
    }
}

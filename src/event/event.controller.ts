import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService){

    }

    @Post()
    async createEvent(
        @Body() event: Event,
    ): Promise<Event>{
        return this.eventService.create(event);
    }
}

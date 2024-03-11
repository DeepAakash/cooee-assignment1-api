import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDTO } from './DTO/create-event.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService){

    }

    @Post()
    @UseGuards(AuthGuard())
    async createEvent(
        @Body() event: CreateEventDTO,
    ): Promise<Event>{
        return this.eventService.create(event);
    }
}

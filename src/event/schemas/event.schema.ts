// Schema of event collection 

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

export enum Name {
    VIEW = 'View Item',
    ADD = 'Add To Cart',
    PURCHASE = 'Purchase',
}


@Schema({ _id: false })
export class Item{
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    name: string;
}

@Schema({ collection: 'event', versionKey: false })
export class Event{
    @Prop({ required: true })
    device: string;

    @Prop({ required: true })
    name: Name;

    @Prop({ required: true, type: Date })
    occurred: Date;

    @Prop({ required: true, _id: false })
    item: Item;
}

export const EventSchema = SchemaFactory.createForClass(Event);
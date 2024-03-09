import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

export enum Name{
    VIEW= 'View Item',
    ADD= 'Add To Cart',
    PURCHASE= 'Purchase',
}

@Schema()
export class Item {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;
}


@Schema({
    collection: 'event'
})
export class Event{
    @Prop({ required: true })
    device: string;

    @Prop({ required: true })
    name: Name;

    @Prop({type: Date, required: true })
    occurred: Date;

    @Prop({type: Item, required: true })
    item: Item;
}

export const EventSchema=SchemaFactory.createForClass(Event);
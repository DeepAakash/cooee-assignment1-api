import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

export enum Event{
    VIEW= 'View Item',
    ADD= 'Add To Cart',
    PURCHASE= 'Purchase',
}

@Schema()
export class Id {
  @Prop({type: Date, required: true })
  date: Date;

  @Prop({ required: true })
  event: Event;

  @Prop({ required: true })
  itemID: string;
}


@Schema({
    collection: 'itemReport'
})
export class ItemReport{
    @Prop({ type: Id, required: true })
    _id: Id;

    @Prop({ required: true })
    itemID: string;

    @Prop({ required: true })
    itemName: string;

    @Prop({ required: true })
    event: Event;

    @Prop({ required: true })
    count: number;
}

export const ItemReportSchema=SchemaFactory.createForClass(ItemReport);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class AggrIRSchema{
    @Prop()
    DateTime: Date;

    @Prop()
    ItemID: string;

    @Prop()
    ItemName: string;

    @Prop()
    ViewCount: number;

    @Prop()
    AddToCartCount: number;

    @Prop()
    PurchaseCount: number;
}

export const AggrIRSchemaSchema = SchemaFactory.createForClass(AggrIRSchema);

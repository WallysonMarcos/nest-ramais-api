 import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RamaisDocument = Ramais & Document;

@Schema()
export class Ramais {
    @Prop()
    name: string;

    @Prop()
    number: string;

    @Prop()
    local: string;
}

export const RamaisSchema = SchemaFactory.createForClass(Ramais);
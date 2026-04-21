import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ServiceType } from './enums/service-type.enum';

export type AppointmentDocument = Appointment & Document;

@Schema({ timestamps: true })
export class Appointment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, enum: ServiceType })
  service: ServiceType;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  time: string;

  @Prop()
  message?: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

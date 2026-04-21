import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment, AppointmentDocument } from './appointments.schema';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment.name)
    private appointmentModel: Model<AppointmentDocument>,
  ) {}

  async create(dto: CreateAppointmentDto): Promise<AppointmentDocument> {
    return this.appointmentModel.create(dto);
  }

  async findAll(): Promise<AppointmentDocument[]> {
    return this.appointmentModel.find().lean().exec() as Promise<AppointmentDocument[]>;
  }

  async remove(id: string): Promise<void> {
    const result = await this.appointmentModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Appointment ${id} not found`);
  }
}

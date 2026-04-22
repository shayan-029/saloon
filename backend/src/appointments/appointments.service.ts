import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment, AppointmentDocument } from './appointments.schema';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { EmailService } from '../email/email.service';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment.name)
    private appointmentModel: Model<AppointmentDocument>,
    private emailService: EmailService,
  ) {}

  async create(dto: CreateAppointmentDto): Promise<AppointmentDocument> {
    const appointment = await this.appointmentModel.create(dto);
    await this.emailService.sendBookingConfirmation(dto);
    return appointment;
  }

  async findAll(): Promise<AppointmentDocument[]> {
    return this.appointmentModel.find().lean().exec() as Promise<AppointmentDocument[]>;
  }

  async remove(id: string): Promise<void> {
    const result = await this.appointmentModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Appointment ${id} not found`);
  }
}

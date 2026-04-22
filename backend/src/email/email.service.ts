import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { CreateAppointmentDto } from '../appointments/dto/create-appointment.dto';

@Injectable()
export class EmailService {
  private readonly resend: Resend;
  private readonly logger = new Logger(EmailService.name);
  private readonly fromEmail: string;
  private readonly adminEmail: string;

  constructor(private config: ConfigService) {
    this.resend = new Resend(this.config.get<string>('RESEND_API_KEY'));
    this.fromEmail = this.config.get<string>(
      'EMAIL_FROM',
      'onboarding@resend.dev',
    );
    this.adminEmail = this.config.get<string>('ADMIN_EMAIL', '');
  }

  async sendBookingConfirmation(dto: CreateAppointmentDto): Promise<void> {
    const date = new Date(dto.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const html = `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#0A0A0A;color:#FAFAFA;padding:40px;border:1px solid #C9A84C;">
        <h1 style="color:#C9A84C;text-align:center;letter-spacing:2px;font-size:24px;margin-bottom:8px;">APPOINTMENT CONFIRMED</h1>
        <p style="text-align:center;color:#aaa;font-size:13px;margin-top:0;">Premium Salon Experience</p>
        <hr style="border:none;border-top:1px solid #C9A84C33;margin:24px 0;" />
        <p style="font-size:16px;">Dear <strong style="color:#C9A84C;">${dto.name}</strong>,</p>
        <p>Your appointment has been successfully booked. Here are your details:</p>
        <table style="width:100%;border-collapse:collapse;margin:24px 0;">
          <tr><td style="padding:10px;border-bottom:1px solid #222;color:#aaa;width:40%;">Service</td><td style="padding:10px;border-bottom:1px solid #222;">${dto.service}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #222;color:#aaa;">Date</td><td style="padding:10px;border-bottom:1px solid #222;">${date}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #222;color:#aaa;">Time</td><td style="padding:10px;border-bottom:1px solid #222;">${dto.time}</td></tr>
          <tr><td style="padding:10px;color:#aaa;">Phone</td><td style="padding:10px;">${dto.phone}</td></tr>
        </table>
        ${dto.message ? `<p style="background:#111;padding:16px;border-left:3px solid #C9A84C;font-style:italic;">"${dto.message}"</p>` : ''}
        <p style="color:#aaa;font-size:13px;">If you need to reschedule or cancel, please contact us as soon as possible.</p>
        <hr style="border:none;border-top:1px solid #C9A84C33;margin:24px 0;" />
        <p style="text-align:center;color:#C9A84C;font-size:12px;letter-spacing:1px;">PREMIUM SALON — We look forward to seeing you</p>
      </div>
    `;

    try {
      console.log('sending email');
      await this.resend.emails.send({
        from: this.fromEmail,
        to: dto.email,
        subject: `Appointment Confirmed — ${dto.service} on ${date}`,
        html,
      });

      if (this.adminEmail) {
        console.log('sending email to admin');
        await this.resend.emails.send({
          from: this.fromEmail,
          to: this.adminEmail,
          subject: `New Booking: ${dto.name} — ${dto.service}`,
          html: `
            <p><strong>New appointment booked:</strong></p>
            <ul>
              <li>Name: ${dto.name}</li>
              <li>Email: ${dto.email}</li>
              <li>Phone: ${dto.phone}</li>
              <li>Service: ${dto.service}</li>
              <li>Date: ${date}</li>
              <li>Time: ${dto.time}</li>
              ${dto.message ? `<li>Message: ${dto.message}</li>` : ''}
            </ul>
          `,
        });
      }
    } catch (err) {
      this.logger.error('Failed to send booking email', err);
    }
  }
}

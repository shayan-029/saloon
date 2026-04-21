import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsDateString,
  IsOptional,
  Matches,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ServiceType } from '../enums/service-type.enum';

export class CreateAppointmentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '+923001234567' })
  @Matches(/^\+?[0-9]{7,15}$/, { message: 'Invalid phone number' })
  phone: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ enum: ServiceType })
  @IsEnum(ServiceType)
  service: ServiceType;

  @ApiProperty({ example: '2024-06-15' })
  @IsDateString()
  date: string;

  @ApiProperty({ example: '14:00' })
  @IsString()
  @IsNotEmpty()
  time: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  message?: string;
}

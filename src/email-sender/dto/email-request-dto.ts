import { IsNotEmpty, IsEmail } from 'class-validator';

export class EmailRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email_from: string;

  @IsNotEmpty()
  @IsEmail()
  email_to: string;

  @IsNotEmpty()
  message: {
    subject: string;
    body: string;
  };
}

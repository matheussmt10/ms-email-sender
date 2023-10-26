import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EmailServiceContract } from './email-sender.service.contract';
import { EmailRequestDto } from '../dto/email-request-dto';
import { SES } from 'aws-sdk';

@Injectable()
export class EmailService implements EmailServiceContract {
  private emailProvider: SES;
  constructor() {
    this.emailProvider = new SES({
      region: 'us-east-1',
    });
  }

  public async sendEmail(email: EmailRequestDto): Promise<void> {
    try {
      await this.emailProvider
        .sendEmail({
          Source: email.email_from,
          Destination: {
            ToAddresses: [email.email_to],
          },
          Message: {
            Subject: {
              Data: email.message.subject,
            },
            Body: {
              Text: {
                Data: email.message.body,
              },
            },
          },
        })
        .promise();
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

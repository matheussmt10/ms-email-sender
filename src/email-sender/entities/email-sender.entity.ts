/* eslint-disable @typescript-eslint/no-unused-vars */
import { EmailRequestDto } from '../dto/email-request-dto';

export class EmailSenderLogic {
  constructor(private emailServiceAws) {}
  public async sendEmail(emailRequest: EmailRequestDto): Promise<void> {}
}

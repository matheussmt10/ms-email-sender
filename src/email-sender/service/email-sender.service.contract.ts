import { EmailRequestDto } from '../dto/email-request-dto';

export abstract class EmailServiceContract {
  abstract sendEmail(body: EmailRequestDto): Promise<void>;
}

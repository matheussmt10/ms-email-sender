import { Controller, Post, Body, UseGuards, HttpCode } from '@nestjs/common';
import { EmailRequestDto } from '../dto/email-request-dto';
import { EmailServiceContract } from '../service/email-sender.service.contract';
import { ApiKeyGuard } from 'src/email-sender/config/api-key';

@Controller('send')
@UseGuards(ApiKeyGuard)
export class EmailSenderController {
  constructor(private readonly emailSenderService: EmailServiceContract) {}

  @Post()
  @HttpCode(200)
  send(@Body() emailRequest: EmailRequestDto) {
    return this.emailSenderService.sendEmail(emailRequest);
  }
}

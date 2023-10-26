import { Module } from '@nestjs/common';
import { EmailService } from './service/email-sender.service';
import { EmailSenderController } from './controller/email-sender.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schema/user.schema';
import { EmailServiceContract } from './service/email-sender.service.contract';
import { EmailSenderRepositoryContract } from './repository/email-sender.repository.contract';
import { EmailSenderRepository } from './repository/email-sender.repository';
import { AppEnvs } from './config/app-env';

@Module({
  imports: [
    MongooseModule.forRoot(AppEnvs.AUTH_DB_MONGO),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [EmailSenderController],
  providers: [
    {
      provide: EmailServiceContract,
      useClass: EmailService,
    },
    {
      provide: EmailSenderRepositoryContract,
      useClass: EmailSenderRepository,
    },
  ],
})
export class EmailSenderModule {}

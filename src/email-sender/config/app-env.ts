/* eslint-disable radix */
import * as dotenv from 'dotenv';

dotenv.config();
export class AppEnvs {
  static readonly X_API_KEY: string =
    process.env.X_API_KEY || 'dbb4b052-23b9-48c4-b885-9751d8be0dc5';

  static readonly AUTH_DB_MONGO: string =
    process.env.AUTH_DB_MONGO ||
    'mongodb+srv://mathcode:UllOGkENxqlJOhwW@cluster0.fvmu2kl.mongodb.net/sistemas';

  static readonly AWS_ACCESS_KEY_ID: Promise<void> | string =
    process.env.AWS_ACCESS_KEY_ID || '';

  static readonly AWS_SECRET_ACCESS_KEY: string =
    process.env.AWS_SECRET_ACCESS_KEY || '';
}

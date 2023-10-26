import { User } from '../../schema/user.schema';

export abstract class EmailSenderRepositoryContract {
  abstract findAll(): Promise<Array<User>>;

  abstract findOne(id: string): Promise<User | null>;

  abstract findOneByEmail(email: string): Promise<User | null>;

  abstract updateLastSessionDate(user: User): Promise<void>;
}

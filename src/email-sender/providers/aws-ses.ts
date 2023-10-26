import SES from 'aws-sdk/clients/ses';

export abstract class EmailProvider {
  provider: SES;
  constructor() {
    this.provider = new SES({
      region: 'us-east-1',
    });
  }
}

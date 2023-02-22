import Entity from './entity';

export default class User extends Entity<User> {
  public firstName: string;

  public lastName: string;

  public password: string;

  public tosAgreementDate: Date;

  public phone?: string;
}

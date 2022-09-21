export default class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public password: string;
  public tosAgreementDate: Date;
  public phone?: string;

  constructor(params: User) {
    Object.assign(this, params);
  }

  public toJson() {
    return { ...this };
  }
}

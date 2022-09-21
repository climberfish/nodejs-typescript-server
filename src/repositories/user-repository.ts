import db from '../db';
import User from '../entities/user';

class Repository {
  public static create(obj: any) {
    db.create(obj.constructor.name, obj.id, obj.toJson());
  }
}

export default class UserRepository {
  public static create(data: User): User {
    const user = new User(data);
    user.id = 'bla';
    Repository.create(user);
    return user;
  }
}

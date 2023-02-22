import User from '../entities/user';
import Repository from './repository';

export default class UserRepository {
  public static create(data: User): User {
    const user = new User(data);
    user.id = 'bla';
    Repository.create(user);
    return user;
  }
}

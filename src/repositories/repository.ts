import db from '../db';
import Entity from '../entities/entity';

export default class Repository {
  public static create(obj: Entity<unknown>) {
    db.create(obj.constructor.name, obj.id, obj.toJson());
  }
}

export default abstract class Entity<T> {
  public id: string;

  constructor(params: T) {
    Object.assign(this, params);
  }

  public toJson() {
    return { ...this };
  }
}

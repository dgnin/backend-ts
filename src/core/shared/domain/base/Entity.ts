import EntityId from './EntityId';

export default abstract class Entity {
  readonly id: EntityId;

  constructor(id?: EntityId) {
    this.id = id ?? EntityId.createRandom();
  }

  public equals(another: Entity): boolean {
    return this.constructor === another.constructor && this.id.equals(another.id);
  }
}

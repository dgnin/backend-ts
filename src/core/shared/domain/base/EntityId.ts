import { UUID } from 'crypto';
import InvalidValueObjectError from './InvalidValueObjectError';
import { v4, validate } from 'uuid';
import ValueObject from '@core/shared/domain/base/ValueObject';

export default class EntityId implements ValueObject {
  readonly value: UUID;

  constructor(value: UUID) {
    EntityId.assertIsValidUUID(value);
    this.value = value;
  }

  public static createRandom(): EntityId {
    const value = v4() as UUID;
    return new EntityId(value);
  }

  public equals(another: EntityId): boolean {
    return this.constructor === another.constructor && this.value === another.value;
  }

  private static assertIsValidUUID(value: unknown): asserts value is UUID {
    if (typeof value !== 'string' || !validate(value)) {
      throw new InvalidValueObjectError(`${String(value)} is not a valid UUID`);
    }
  }
}

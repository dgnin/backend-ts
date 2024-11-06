export default interface ValueObject {
  equals(another: ValueObject): boolean;
}

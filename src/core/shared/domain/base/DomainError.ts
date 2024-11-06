import httpStatus, { HttpStatus } from 'http-status';

export default abstract class DomainError extends Error {
  readonly dev: keyof HttpStatus & number = httpStatus.NOT_FOUND;
  readonly prod: keyof HttpStatus & number = httpStatus.NOT_FOUND;
}

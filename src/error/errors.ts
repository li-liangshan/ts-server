/**
 * Created by liliangshan on 2021/9/21
 */

type Exception = Error;

export class BaseError extends Error implements Exception {

  constructor(message: string, error?: Exception) {
    super(message);
    this.name = "BASE_ERROR";
    this.message = message;
    this.stack = error?.stack;
    if (!error) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}

export class UnknownError extends BaseError {

  constructor(message: string, error?: Exception) {
    super(message, error);
    this.name = "UNKNOWN_ERROR";
  }

}

export class IllegalArgumentError extends BaseError {
  constructor(message: string, error?: Exception) {
    super(message, error);
    this.name = "ILLEGAL_ARGUMENT_ERROR";
  }

}

export class NotFoundError extends BaseError {
  constructor(message: string, error?: Exception) {
    super(message, error);
    this.name = "NOT_FOUND_ERROR";
  }
}



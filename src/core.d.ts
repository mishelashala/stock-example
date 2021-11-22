declare module Core {
  export type Result<T> = Ok<T> | Err;

  export type Ok<T> = {
    ok: true;
    data: T;
  };

  export type Err = {
    ok: false;
    error: Error;
  };

  export interface IStock {
    Price: (date: string) => Result<number>;
  }
}

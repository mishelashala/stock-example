export function ok<T>(data: T): Core.Ok<T> {
  return {
    ok: true,
    data,
  };
}

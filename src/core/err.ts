export const err = (error: Error): Core.Err => ({
  ok: false,
  error,
});

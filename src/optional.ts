export type Optional<T> = T | undefined;

export function optional_<T>(x: T): Optional<T>{
  return x;
}

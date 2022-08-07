export type Nullable<T> = T | null;

export function nullable_<T>(x: T): Nullable<T>{
  return x;
}

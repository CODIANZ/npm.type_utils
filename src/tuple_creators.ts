import { Numbers, Decrement, Underflow } from "./number";

type RepeatMain<
  T,
  N extends Numbers | Underflow,
  ARR extends any[]
> = N extends 0 ? ARR : RepeatMain<T, Decrement<N>, [...ARR, T]>;
export type Repeat<T, N extends Numbers> = RepeatMain<T, N, []>;

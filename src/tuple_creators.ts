import { Numbers, Decrement, Underflow } from "./number";

type RepeatMain<
  N extends Numbers | Underflow,
  T,
  ARR extends any[]
> = N extends 0 ? ARR : RepeatMain<Decrement<N>, T, [...ARR, T]>;
export type Repeat<N extends Numbers, T> = RepeatMain<N, T, []>;

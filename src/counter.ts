type _COUNTER = any[];

export type Increment<C extends _COUNTER> = [...C, any];
export type Decrement<C extends _COUNTER> = C extends [...infer U, any] ? U : [];
export type Value<C extends _COUNTER> = C["length"];

type RepeatMain<
  N extends number,
  T,
  R extends any[] = [],
  C extends _COUNTER = []
  > = N extends Value<C> ? R : RepeatMain<N, T, [T, ...R], Increment<C>>;
export type Repeat<N extends number, T> = RepeatMain<N, T>;

export type Counter<N extends number> = Repeat<N, any>;


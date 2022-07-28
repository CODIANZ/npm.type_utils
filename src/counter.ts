type _COUNTER = never[];

export type Increment<C extends _COUNTER> = [...C, never];
export type Decrement<C extends _COUNTER> = C extends [...infer U, never] ? U : never;
export type Value<C extends _COUNTER> = C["length"];

type RepeatMain<
  N extends number,
  T,
  R extends any[] = [],
  C extends _COUNTER = []
  > = N extends Value<C> ? R : RepeatMain<N, T, [...R, T], Increment<C>>;
export type Repeat<N extends number, T> = RepeatMain<N, T>;

export type Counter<N extends number> = Repeat<N, never>;


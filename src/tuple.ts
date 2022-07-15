export type TupleLength<ARGS extends any[]> = ARGS["length"];
export type TuplePushBack<ARGS extends any[], T> = [...ARGS, T];
export type TuplePushFront<ARGS extends any[], T> = [T, ...ARGS];
export type TuplePopBack<ARGS extends any[]> = ARGS extends [...infer X, any] ? X : never;
export type TuplePopFront<ARGS extends any[]> = ARGS extends [any, ...infer X] ? X : never;
export type TupleFront<ARGS extends any[]> = ARGS extends [infer X, ...any] ? X : never;
export type TupleBack<ARGS extends any[]> = ARGS extends [...any, infer X] ? X : never;
export type TupleToUnion<ARGS extends any[]> = ARGS[number];

type TupleFlattenMain<
  REMAIN extends any[],
  RESULT extends any[]
> =
  REMAIN extends [infer X, ...infer Y] ?
    X extends any[] ?
      TupleFlattenMain<Y, [...RESULT, ...TupleFlattenMain<X, []>]> :
      TupleFlattenMain<Y, [...RESULT, X]>
  : RESULT;
export type TupleFlatten<ARGS extends any[]> = TupleFlattenMain<ARGS, []>;

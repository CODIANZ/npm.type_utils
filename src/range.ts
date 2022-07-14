import { Increment, Numbers, Overflow } from "./number";
import { TuplePushBack, TupleToUnion } from "./tuple";

export type RangeTuple<
  N extends Numbers[number],
  COUNT extends Numbers[number] | Overflow = 0,
  ARR extends any[] = []
> = COUNT extends N ? TuplePushBack<ARR, COUNT> : RangeTuple<N, Increment<COUNT>, TuplePushBack<ARR, COUNT>>;

export type RangeUninon<N extends Numbers[number]> = TupleToUnion<RangeTuple<N>>;

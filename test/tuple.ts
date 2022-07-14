import { IsSame, static_assert, TupleBack, TupleFront, TuplePopBack, TuplePopFront, TuplePushBack, TuplePushFront } from "../src";

static_assert<IsSame<TuplePushBack<[1, 2], 3>, [1, 2, 3]>>(true);
static_assert<IsSame<TuplePopBack<[1, 2, 3]>, [1, 2]>>(true);
static_assert<IsSame<TuplePushFront<[1, 2], 3>, [3, 1, 2]>>(true);
static_assert<IsSame<TuplePopFront<[1, 2, 3]>, [2, 3]>>(true);
static_assert<IsSame<TupleFront<[1, 2, 3]>, 1>>(true);
static_assert<IsSame<TupleBack<[1, 2, 3]>, 3>>(true);


import { IsSame, RangeTuple, RangeUninon, static_assert } from "../src";

static_assert<IsSame<RangeTuple<5>, [0, 1, 2, 3, 4, 5]>>(true);
static_assert<IsSame<RangeTuple<0>, [0]>>(true);
static_assert<IsSame<RangeUninon<5>, 0 | 1 | 2 | 3 | 4 | 5>>(true);


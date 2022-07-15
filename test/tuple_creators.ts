import { IsSame, Repeat, static_assert } from "../src";

static_assert<IsSame<Repeat<5, true>, [true, true, true, true, true]>>(true);
static_assert<IsSame<Repeat<2, [true, 1]>, [[true, 1], [true, 1]]>>(true);

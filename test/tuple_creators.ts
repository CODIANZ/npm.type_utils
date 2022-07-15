import { IsSame, Repeat, static_assert } from "../src";

static_assert<IsSame<Repeat<true, 5>, [true, true, true, true, true]>>(true);
static_assert<IsSame<Repeat<[true, 1], 2>, [[true, 1], [true, 1]]>>(true);


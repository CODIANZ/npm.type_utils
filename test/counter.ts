import { Decrement, Increment, IsSame, Repeat, Counter, static_assert, Value } from "../src";

static_assert<IsSame<Value<Counter<0>>, 0>>(true);
static_assert<IsSame<Value<Counter<1>>, 1>>(true);
static_assert<IsSame<Value<Counter<500>>, 500>>(true);

type C100 = Counter<100>;
type C101 = Increment<C100>;
type C099 = Decrement<C100>;

static_assert<IsSame<Value<C100>, 100>>(true);
static_assert<IsSame<Value<C101>, 101>>(true);
static_assert<IsSame<Value<C099>,  99>>(true);

static_assert<IsSame<Value<Increment<Decrement<C100>>>, 100>>(true);

type C000 = Counter<0>;
static_assert<IsSame<Decrement<C000>, never>>(true);

static_assert<IsSame<Repeat<5, true>, [true, true, true, true, true]>>(true);
static_assert<IsSame<Repeat<2, [true, 1]>, [[true, 1], [true, 1]]>>(true);


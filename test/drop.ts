import {Drop, EmptyType, IsSame, static_assert} from "../src";

static_assert<IsSame<Drop<{a: number}, "a">, EmptyType>>(true);
static_assert<IsSame<Drop<{a: number}, "a">, {}>>(false);
static_assert<IsSame<Drop<{a: number}, "a">, any>>(false);
static_assert<IsSame<Drop<{a: number}, "a", never>, never>>(true);

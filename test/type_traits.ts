import {HasProperty, PropertyType, IsSame, static_assert} from "../src";

static_assert<IsSame<string, string>>(true);
static_assert<IsSame<number, string>>(false);
static_assert<IsSame<
  {a: number; b: string},
  {a: number; b: string}
>>(true);
static_assert<IsSame<
  {a: number; b?: string},
  {a: number; b: string}
>>(false);
static_assert<IsSame<"a" | "b", "b" | "a">>(true);
static_assert<IsSame<"a" | "b", "b" | "c">>(false);
static_assert<IsSame<{}, {}>>(true);
static_assert<IsSame<{}, any>>(false);
static_assert<IsSame<any, {}>>(false);
static_assert<IsSame<{}, never>>(false);
static_assert<IsSame<never, {}>>(false);
static_assert<IsSame<never, any>>(false);
static_assert<IsSame<any, never>>(false);

static_assert<HasProperty<{a: number}, "a">>(true);
static_assert<HasProperty<{a: number}, "b">>(false);
static_assert<HasProperty<{a?: number}, "a">>(true);

static_assert<IsSame<PropertyType<{a: number}, "a">, number>>(true);
static_assert<IsSame<PropertyType<{a: number}, "b">, number>>(false);
static_assert<IsSame<PropertyType<{a: number}, "b">, never>>(true);
static_assert<IsSame<PropertyType<{a?: number}, "a">, number>>(false);
static_assert<IsSame<PropertyType<{a?: number}, "a">, number | undefined>>(true);
static_assert<IsSame<PropertyType<{a?: number}, "b">, number>>(false);
static_assert<IsSame<PropertyType<{a?: number}, "b">, undefined>>(false);
static_assert<IsSame<PropertyType<{a?: number}, "b">, never>>(true);

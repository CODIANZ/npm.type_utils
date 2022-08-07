import { DeepKeyOf, IsSame, static_assert } from "../src";

type OBJ = {
  a: string;
  b: number;
}

type OBJ_OBJ = {
  inner: OBJ;
}

type ARR = [string, number, OBJ];

type MIX = {
  a: OBJ,
  b: OBJ_OBJ,
  c: ARR
}

type MIX_MIX = {
  mix: MIX,
  arr: [MIX, MIX, 1, 2]
}

static_assert<IsSame<DeepKeyOf<OBJ>, "a" | "b">>(true);
static_assert<IsSame<DeepKeyOf<OBJ_OBJ>, "inner.a" | "inner.b">>(true);
static_assert<IsSame<DeepKeyOf<ARR>, "[0]" | "[1]" | "[2].a" | "[2].b">>(true);
static_assert<IsSame<DeepKeyOf<MIX>, "a.a" | "a.b" | "b.inner.a" | "b.inner.b" | "c.[0]" | "c.[1]" | "c.[2].a" | "c.[2].b">>(true);
static_assert<IsSame<DeepKeyOf<MIX_MIX>,
  "mix.a.a" | "mix.a.b" | "mix.b.inner.a" | "mix.b.inner.b" | "mix.c.[0]" | "mix.c.[1]" | "mix.c.[2].a" | "mix.c.[2].b" |
  "arr.[0].a.a" | "arr.[0].a.b" | "arr.[0].b.inner.a" | "arr.[0].b.inner.b" | "arr.[0].c.[0]" | "arr.[0].c.[1]" | "arr.[0].c.[2].a" | "arr.[0].c.[2].b" |
  "arr.[1].a.a" | "arr.[1].a.b" | "arr.[1].b.inner.a" | "arr.[1].b.inner.b" | "arr.[1].c.[0]" | "arr.[1].c.[1]" | "arr.[1].c.[2].a" | "arr.[1].c.[2].b" |
  "arr.[2]" | "arr.[3]"
>>(true);


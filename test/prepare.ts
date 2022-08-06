import {IsSame, prepare, static_assert} from "../src";

const x = prepare(() => {
  return 1;
});
static_assert<IsSame<typeof x, number>>(true);
static_assert<IsSame<typeof x, 1>>(false);


const y = prepare(() => {
  return 1 as const;
});
static_assert<IsSame<typeof y, number>>(false);
static_assert<IsSame<typeof y, 1>>(true);

const z = prepare(() => {
  if(x == 1) return "OK";
  return undefined;
});
static_assert<IsSame<typeof z, "OK" | undefined>>(true);

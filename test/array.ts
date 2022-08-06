import { first, last, single } from "../src";

{
  const arr = [1, 2, 3];
  first(arr);
  last(arr);
  single(arr);
}

{
  const arr = [1 as const, 2 as const, 3 as const];
  first(arr);
  last(arr);
  single(arr);
}

{
  const arr = [1, 2, 3] as const;
  first(arr);
  last(arr);
  single(arr);
}

{
  first(undefined);
  last(undefined);
  single(undefined);
}

{
  first([]);
  last([]);
  single([]);
}

{
  const arr = [1];
  first(arr);
  last(arr);
  single(arr);
}

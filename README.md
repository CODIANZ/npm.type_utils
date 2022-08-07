# type_utilities

## Deep Key Of

DeepKeyOf&lt;T&gt; generates a string literal type from object or tupple (array) deeply.

```ts
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

type A = DeepKeyOf<OBJ>;
/* "a" | "b" */

TYPE B = DeepKeyOf<OBJ_OBJ>;
/* "inner.a" | "inner.b" */

TYPE C = DeepKeyOf<ARR>;
/* "[0]" | "[1]" | "[2].a" | "[2].b" */

TYPE D = DeepKeyOf<MIX>;
/* "a.a" | "a.b" | "b.inner.a" | "b.inner.b" | "c.[0]" | "c.[1]" | "c.[2].a" | "c.[2].b" */

TYPE E = DeepKeyOf<MIX_MIX>;
/* "mix.a.a" | "mix.a.b" | "mix.b.inner.a" | "mix.b.inner.b" | "mix.c.[0]" | "mix.c.[1]" | "mix.c.[2].a" | "mix.c.[2].b" |
  "arr.[0].a.a" | "arr.[0].a.b" | "arr.[0].b.inner.a" | "arr.[0].b.inner.b" | "arr.[0].c.[0]" | "arr.[0].c.[1]" | "arr.[0].c.[2].a" | "arr.[0].c.[2].b" |
  "arr.[1].a.a" | "arr.[1].a.b" | "arr.[1].b.inner.a" | "arr.[1].b.inner.b" | "arr.[1].c.[0]" | "arr.[1].c.[1]" | "arr.[1].c.[2].a" | "arr.[1].c.[2].b" |
  "arr.[2]" | "arr.[3]"
*/
```

## Counter

The counter used with the Generics parameter.

```ts
type C100 = Counter<100>;
type C101 = Increment<C100>;
type C099 = Decrement<C100>;
type V100 = Value<C100>; /* 100 */
type V101 = Value<C101>; /* 101 */
type V099 = Value<C099>; /*  99 */

type C000 = Counter<0>;
type Cxxx = Decrement<C000>; /* never */
type Vxxx = Value<Cxxx>;     /* never */

/* Matching of counter values ​​looks like this */
type X = Value<C100> extends 100 ? true : false; /* true */
```

## Tuple Creators

### Repeat

```ts
type X = Repeat<5, true>; /* [true, true, true, true, true] */
```

## Tuple Operators

### Flatten

```ts
type X = TupleFlatten<[[[1], 2], [3, 4], 5]>; /* 1, 2, 3, 4, 5 */
type Y = Repeat<2, [true, false]>; /* [[true, false], [true, false]] */
type Z = TupleFlatten<Y>; /* [true, false, true, false] */
```

## EmptyType

### description

A type to prevent `{}` type from being `any` type in TypeScript.

### usage

```ts
/* {} type is almost any type */
const x: {} = {
  a: 1,
  b: "b"
};

/* strict {} type detects errors */
const y: EmptyType = {
  a: 1,  /* <- error */
  b: "b" /* <- error */
};

/* ok (there is nothing else) */
const z: EmptyType = {}; 
```

## Drop

### description

If all properties are deleted by `Omit<>`, it will be `{}` type. `{}` type behaves like `any`, so the type information is corrupted. `Drop<>` is `EmptyType` (strict `{}` type) as the result when the calculation result is `{}` type.




### usage

```ts
type X = { a: number; };

const _1: Omit<X, "a"> = {
  a: "abc" /* no error (go through the check) */
};

const _2: Drop<X, "a"> = {
  a: "abc" /* error */
};
```

## as_

### description

Initialize the object type-safely in the right section.

You can easily and safely initialize the object as a return value.

### usage

```ts
/** sample type */
type X = {x: "a"};

/** explicit */
function foo() : X {
  return {x: "a"};
}

/** inference */
function bar() {
  const p: X = {x: "a"};
  return p;
}

/** type checking is passed through */
function baz() {
  return {x: "a", y: 456} as X;
}

/** type checking is passed through */
function baz2() {
  return <X>{x: "a", y: 456};
}

/** inference with As */
function hoge() {
  return as_<X>({x: "a"});
}

function fuga() {
  return as_<X>({x: "a", y: 456}); /* <- error */
}
```

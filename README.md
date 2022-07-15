# type_utilities


## Tuple Creators

### Repeat

```ts
type X = Repeat<true, 5>; /* [true, true, true, true, true] */
```

## Tuple Operators

### Flatten

```ts
type X = TupleFlatten<[[[1], 2], [3, 4], 5]>; /* 1, 2, 3, 4, 5 */
type Y = Repeat<[true, false], 2>; /* [[true, false], [true, false]] */
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

## As

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

/** terrible code... */
function baz() {
  return {x: 123, y: 456} as X;
}

/** inference with As */
function hoge() {
  return As<X>({x: "a"});
}

function fuga() {
  return As<X>({x: 123, y: 456}); /* <- error */
}
```

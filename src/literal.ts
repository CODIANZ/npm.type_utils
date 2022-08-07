export type LiterableTypes = string | number | bigint | boolean | null | undefined;
export type PropertyKeyTypes = string | number | symbol;

export type Concat<
  T1 extends LiterableTypes,
  T2 extends LiterableTypes,
  SEPARATOR extends string | undefined = undefined
> = 
  T1 extends undefined ?
    T2 extends undefined ? never : `${T2}`
  : T2 extends undefined ?
    `${T1}` 
    : SEPARATOR extends undefined ?
      `${T1}${T2}` : `${T1}${SEPARATOR}${T2}`;

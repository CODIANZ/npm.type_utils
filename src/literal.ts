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

type DeepKeyOfMain<
  OBJ extends object,
  KEY extends PropertyKeyTypes,
  SEPARATOR extends string,
  OBJSTR extends string | undefined
> =
  KEY extends keyof OBJ ?
    KEY extends string | number ?
      OBJ[KEY] extends object ?
        DeepKeyOfMain<OBJ[KEY], keyof OBJ[KEY], SEPARATOR, Concat<OBJSTR, KEY, SEPARATOR>>
        : Concat<OBJSTR, KEY, SEPARATOR>
      : never
    : never;

export type DeepKeyOf<
  T extends object,
  SEPARATOR extends string = "."
> = DeepKeyOfMain<T, keyof T, SEPARATOR, undefined>;

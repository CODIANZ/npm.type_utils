export type Str<T> = T extends string ? `${T}` : never;

export type Concat<T1, T2, SEPARATOR = "."> = 
  T1 extends undefined ?
    T2 extends undefined ?
      never : `${Str<T2>}`
  :
    T2 extends undefined ?
      never : `${Str<T1>}${Str<SEPARATOR>}${Str<T2>}`;
  
type DeepKeyOfMain<OBJ, KEY, SEPARATOR, OBJSTR> =
  OBJ extends object ?
    KEY extends keyof OBJ ?
      OBJ[KEY] extends object ?
      DeepKeyOfMain<OBJ[KEY], keyof OBJ[KEY], SEPARATOR, Concat<OBJSTR, KEY, SEPARATOR>>
        : Concat<OBJSTR, KEY, SEPARATOR>
      : never
    : never;

export type DeepKeyOf<T, SEPARATOR = "."> = DeepKeyOfMain<T, keyof T, SEPARATOR, undefined>;

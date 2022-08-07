import { Counter, CounterType, Increment, Value } from "./counter";
import { Concat, PropertyKeyTypes } from "./literal";

namespace DeepKeyOfInternal
{
  type ProceedObject<
    OBJ extends object,
    KEY extends PropertyKeyTypes,
    SEPARATOR extends string,
    OBJSTR extends string | undefined
  > =
    KEY extends keyof OBJ ?
      KEY extends string | number ?
        OBJ[KEY] extends object ?
          Main<OBJ[KEY], SEPARATOR, Concat<OBJSTR, KEY, SEPARATOR>>
          : Concat<OBJSTR, KEY, SEPARATOR>
        : never
      : never;

  type ProceedArray<
    ARR extends any[],
    SEPARATOR extends string,
    OBJSTR extends string | undefined,
    IDX extends CounterType = Counter<0>
  > = 
    Value<IDX> extends ARR["length"] ?
      never :
      ARR[Value<IDX>] extends object ?
        (
          Main<ARR[Value<IDX>], SEPARATOR, Concat<OBJSTR, `[${Value<IDX>}]`, SEPARATOR>>
          | ProceedArray<ARR, SEPARATOR, OBJSTR, Increment<IDX>>
        )
        : (
            Concat<OBJSTR, `[${Value<IDX>}]`, SEPARATOR>
            | ProceedArray<ARR, SEPARATOR, OBJSTR, Increment<IDX>>
          );
    
  export type Main<
    OBJ extends object,
    SEPARATOR extends string,
    OBJSTR extends string | undefined
  > =
    OBJ extends any[] ?
      ProceedArray<OBJ, SEPARATOR, OBJSTR>
      : ProceedObject<OBJ, keyof OBJ, SEPARATOR, OBJSTR>;
}
  
export type DeepKeyOf<
  T extends object,
  SEPARATOR extends string = "."
> = DeepKeyOfInternal.Main<T, SEPARATOR, undefined>;

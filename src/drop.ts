import { EmptyType } from "./empty_type";
import { IsSame } from "./type_traits";

export type Drop<T, K extends string | number | symbol, E = EmptyType> =
  IsSame<Omit<T,K>, {}> extends true ? E: Omit<T,K>;

export type DropStrict<T, K extends keyof T, E = EmptyType> = Drop<T, K, E>;
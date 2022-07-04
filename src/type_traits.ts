export type IsSame<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;

export type HasProperty<O, P> = P extends keyof O ? true : false;

export type PropertyType<O, P> = P extends keyof O ? O[P] : never;

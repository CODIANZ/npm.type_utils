declare const _empty: unique symbol;

export type EmptyType = {[_empty]?: never};
export type DeepReadonly<T> = T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]>; } : T;
export type RemoveReadonly<T> = { -readonly[P in keyof T]: T[P]; };
export type DeepRemoveReadonly<T> = T extends object ? { -readonly[P in keyof T]: DeepRemoveReadonly<T[P]>; } : T;

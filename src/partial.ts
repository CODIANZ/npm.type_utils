export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]>; } : T;
export type RemovePartial<T> = { [P in keyof T]-?: T[P]; };
export type DeepRemovePartial<T> = T extends object ? { [P in keyof T]-?: DeepRemovePartial<T[P]>; } : T;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export function first<T>(arr?: readonly T[]) {
  return arr && arr.length > 0 ? arr[0] : undefined;
}

export function last<T>(arr?: readonly T[]) {
  return arr && arr.length > 0 ? arr[arr.length - 1] : undefined;
}

export function single<T>(arr?: readonly T[]) {
  return arr && arr.length == 1 ? arr[0] : undefined;
}

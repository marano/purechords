export default function isNonNullable<T>(it: T): it is NonNullable<T> {
  return it !== null && it !== undefined
}
/**
 * Can be help to filter required item out
 * e.g:
 *  type Object = {
 *    name: string;
 *    gender: 'male' | 'female';
 *    address?: string;
 *  }
 *  ExcludeRequired<Object>
 *
 *  result: {
 *   address?: string
 *  }
 */
export declare type ExcludeRequired<T> = Pick<
  T,
  Exclude<
    { [P in keyof T]: T extends Record<P, T[P]> ? never : P }[keyof T],
    undefined
  >
>;

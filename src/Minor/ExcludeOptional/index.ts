/**
 * Can be help to filter Optional item out
 * e.g:
 *  type Object = {
 *    name: string;
 *    gender: 'male' | 'female';
 *    address?: string;
 *  }
 *  ExcludeOptional<Object>
 *
 *  result: {
 *   name: string;
 *   gender: 'male' | 'female'
 *  }
 */
export declare type ExcludeOptional<T> = Pick<
  T,
  Exclude<
    { [P in keyof T]: T extends Record<P, T[P]> ? P : never }[keyof T],
    undefined
  >
>;

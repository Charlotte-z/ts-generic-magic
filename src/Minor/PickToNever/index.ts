/**
 * Pick the key which you want to be never
 * e.g: PickToNever<{A: string; B: string; C: string}, 'A' | 'C'>  { A?: never; C?: never }
 */
export declare type PickToNever<T, U extends keyof T> = {
  [P in U]?: never;
};

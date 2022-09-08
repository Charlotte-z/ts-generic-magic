/**
 * Read only each object
 */

export declare type DeepReadOnly<O> = {
  readonly [P in keyof O]: O[P] extends Object ? DeepReadOnly<O[P]> : O[P];
};

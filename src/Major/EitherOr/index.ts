import { PickToNever } from "../../Minor";

/**
 * Either choose A or choose B and combine with the rest
 * TODO: need to add new function
 */
export declare type EitherOr<T, K extends keyof T, U extends keyof T> =
  | (Omit<T, K> & PickToNever<T, K>)
  | (Omit<T, U> & PickToNever<T, U>);

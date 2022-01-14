/**
 * Pick Object from type
 * e.g
 *      type Result = PickByType<{A: string; B?: string; C: number}, string>
 *
 *    Result => {
 *        A: string;
 *        B?: string;
 *    }
 */
export declare type PickByType<T, O> = Pick<
  T,
  Exclude<{ [P in keyof T]: T[P] extends O ? P : never }[keyof T], undefined>
>;

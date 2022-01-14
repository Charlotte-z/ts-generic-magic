type PickByType<T, O> = Pick<
  T,
  Exclude<{ [P in keyof T]: T[P] extends O ? P : never }[keyof T], undefined>
>;

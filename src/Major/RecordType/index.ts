export * from "./RecordUtils.type";

type FilterArray<T extends string> = T extends `${infer R}[]` ? R : never;

type FilterOptionalArray<T extends string> = T extends `${infer R}[]?`
  ? R
  : never;

type FilterOptional<T extends string> = T extends `${infer R}?`
  ? never
  : T extends `${infer S}`
  ? S
  : never;
type FilterNormal<T extends string> = T extends `${infer R}?` ? R : never;

type ArrayKeyWord = "[]" | "[]?";

type IsArray<T extends string> = T extends `${infer R}${ArrayKeyWord}`
  ? never
  : T;

type MakeOptional<K extends string, T> = {
  [P in K as FilterNormal<IsArray<P>>]?: T;
};

type MakeRequired<K extends string, T> = {
  [P in K as FilterOptional<IsArray<P>>]: T;
};

type MakeRequiredArray<K extends string, T> = {
  [P in K as FilterArray<K>]: Array<T>;
};

type MakeOptionalArray<K extends string, T> = {
  [P in K as FilterOptionalArray<K>]?: Array<T>;
};

export declare type RecordType<T extends string, K> = MakeOptional<T, K> &
  MakeRequired<T, K> &
  MakeOptionalArray<T, K> &
  MakeRequiredArray<T, K>;

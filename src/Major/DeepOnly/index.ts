/**
 * Read only each object
 * 
 * e.g.
    const test: DeepReadOnly<{
        a: {
            b: string;
            c: any[]
        }
    }> = {
        a: {
            b: '',
            c: ['1', 2]
        }
    }

    test.a.c[0] = 1 // Index signature in type 'readonly any[]' only permits reading
    test.a.b = 'new data' // Cannot assign to 'b' because it is a read-only property
 */

export declare type DeepReadOnly<O> = {
  readonly [P in keyof O]: O[P] extends Object ? DeepReadOnly<O[P]> : O[P];
};
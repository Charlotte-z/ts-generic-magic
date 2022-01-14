import { RecordType } from ".";

/**
 * Type string & number is the most appear in project
 * Record string and number, and deal with optional operations by string, just add optional flag in individual string
 * It can simplify code and more readable
 * e.g:
 *    type Test = RecordString<'A?' | 'B[]' | 'C[]?', 'D'> & RecordNumber<'E?' | 'F'>
 *    const test: Test = {
 *      A: '',  optional
 *      C: [''],optional
 *      B: ['', ''],
 *      E: '', optional
 *      F: '
 *    }
 */
export declare type RecordString<T extends string> = RecordType<T, string>;
export declare type RecordNumber<T extends string> = RecordType<T, number>;

# ts-generic-magic

[![Licence](https://badgen.net/badge/license/MIT/blue)](LICENCE.md)

## Description

I found that I need some complex generic type in my daily work, and I make some helpful utils in my project, and I package it to npm to keep updating for a long time

## Installation

```sh
npm install -D ts-generic-magic
# yarn add -D ts-generic-magic
# pnpm install -D ts-generic-magic
```

## Major utils

- [RecordType](#RecordType)
- [EitherOr](#EitherOr)

# RecordType

Create record utils with the same type by your own

## examples

```sh
type RecordDate<T> = RecordType<T, Date>

RecordDate<'created_at' | 'last_modified' | 'updated_at'>
```

# Built-in record utils by RecordType

### RecordString & RecordNumber

#### Background: Type string & number is the most appear in project

Record string and number, and deal with optional operations by string, just add optional flag in individual string
It can simplify code and more readable

```sh
  e.g:
     type Test = RecordString<'A?' | 'B[]' | 'C[]?', 'D'> & RecordNumber<'E?' | 'F'>
     const test: Test = {
       A: '',       // optional
       C: [''],     // optional, and it is an array
       B: ['', ''], // required, and it is an array
       E: '',       // required
       F: ''        // required
     }
```

# EitherOr

## Either choose A or choose B and combine with the rest

```sh
// Correctly
const test: EitherOr<
  { A: string; B: string; C: string; D: string },
  'C' | 'D',
  'B'
> = {
  A: '',
  C: '',
  D: '',
};

// Correctly
const test: EitherOr<
  { A: string; B: string; C: string; D: string },
  'C' | 'D',
  'B'
> = {
  A: '',
  B: ''
};

// Failed
const test: EitherOr<
  { A: string; B: string; C: string; D: string },
  'C' | 'D',
  'B'
> = {
  A: '',
  B: '',
  C: '',  // failed
  D: ''   // failed
};

// Failed
const test: EitherOr<
  { A: string; B: string; C: string; D: string },
  'C' | 'D',
  'B'
> = {
  A: '',
  C: '',
  D: '',
  B: '' // failed
};
```

## Minor utils

- [ExcludeRequired](#ExcludeRequired)
- [ExcludeOptional](#ExcludeOptional)
- [PickToNever](#PickToNever)

# ExcludeRequired

## Can be help to filter required item out

```sh
type Object = {
    name: string;
    gender: 'male' | 'female';
    address?: string;
}

ExcludeRequired<Object>

result: {
    address?: string
}
```

# ExcludeOptional

## Can be help to filter Optional item out

```sh
type Object = {
    name: string;
    gender: 'male' | 'female';
    address?: string;
}

ExcludeOptional<Object>

result: {
    name: string;
    gender: 'male' | 'female'
}
```

# PickToNever

## Pick the key which you want to be never

```sh
  PickToNever<{A: string; B: string; C: string}, 'A' | 'C'>

  result: { A?: never; C?: never }
```

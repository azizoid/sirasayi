# Sirasayi

A simple and lightweight package for converting numbers to Azerbaijani ordinal numbers (sıra sayıları).

## Installation

```bash
npm install sirasayi
```

## Usage

```typescript
import sirasayi from 'sirasayi';

// Basic usage
sirasayi(1);    // "1-ci"
sirasayi(2);    // "2-ci"
sirasayi(3);    // "3-cü"
sirasayi(4);    // "4-cü"
sirasayi(5);    // "5-ci"
sirasayi(6);    // "6-cı"
sirasayi(9);    // "9-cu"
sirasayi(10);   // "10-cu"

// Special cases
sirasayi(100);        // "100-cü"
sirasayi(1000);       // "1000-ci"
sirasayi(1000000);    // "1000000-cu"
```

## API

### `sirasayi(value: number): string`

Converts a number to its Azerbaijani ordinal form.

#### Parameters

- `value` (number): The number to convert

#### Returns

- `string`: The number with the appropriate Azerbaijani ordinal suffix

## License

MIT

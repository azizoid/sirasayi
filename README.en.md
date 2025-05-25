# Sirasayi

A package for formatting ordinal numbers in Azerbaijani language.

[Azərbaycan dilində](README.md)

## 🇬🇧 English

Sirasayi is a small package for formatting ordinal numbers in Azerbaijani language. This package allows you to format numbers with ordinal suffixes (-ci, -cü, etc.).

### Installation

```bash
# Using npm
npm install sirasayi

# Using yarn
yarn add sirasayi

# Using pnpm
pnpm add sirasayi
```

### Usage

#### Node.js

```javascript
// CommonJS
const { sirasayi } = require('sirasayi');

// ES Modules
import { sirasayi } from 'sirasayi';
```

#### Browser

```html
<!-- Using UMD version -->
<script src="path/to/sirasayi.umd.js"></script>
<script>
  // Use as global variable
  sirasayi(1); // "1-ci"
</script>
```

### Examples

```javascript
import { sirasayi } from 'sirasayi';

// Formatting
sirasayi(1);    // "1-ci"
sirasayi(2);    // "2-ci"
sirasayi(3);    // "3-cü"
sirasayi(4);    // "4-cü"
sirasayi(5);    // "5-ci"
sirasayi(10);   // "10-cu"
sirasayi(11);   // "11-ci"
sirasayi(20);   // "20-ci"
sirasayi(21);   // "21-ci"
sirasayi(100);  // "100-cü"
```

### API

#### `sirasayi(number: number): string`

Formats a number into an ordinal number.

- **Parameters:**
  - `number` (number): The number to convert
- **Returns:**
  - `string`: Formatted ordinal number

### TypeScript Support

This package comes with TypeScript definitions, so you get automatic type checking and IDE assistance.

```typescript
import { sirasayi } from 'sirasayi';

const ordinal: string = sirasayi(1);
```

### Browser Support

The package is available in the following formats:
- CommonJS (dist/index.js)
- ES Modules (dist/index.mjs)
- UMD (dist/index.umd.js)

Modern bundlers will automatically use the ES Modules version.

### Contributing

Any help and contributions are welcome! Feel free to submit a Pull Request.

### License

MIT © azizoid 
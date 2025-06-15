# Sirasayi

Azərbaycan dilində sıra sayıları üçün formatlama paketi.

[English version](README.en.md)

## 🇦🇿 Azərbaycan dilində

Sirasayi — Azərbaycan dilində sıra sayıları üçün kiçik paketdir. Bu paket, ədədləri sıra sayı şəkilçiləri ilə (-ci, -cü, və s.) formatlamağa imkan verir.

### Qurlaşdırma

```bash
# npm ilə
npm install sirasayi

# yarn ilə
yarn add sirasayi

# pnpm ilə
pnpm add sirasayi
```

### İstifadə

#### Node.js üçün

```javascript
// CommonJS
const { sirasayi } = require('sirasayi');

// ES Modules
import { sirasayi } from 'sirasayi';
```

#### Brauzer üçün

```html
<!-- UMD versiyası ilə -->
<script src="path/to/sirasayi.umd.js"></script>
<script>
  // Qlobal dəyişən kimi istifadə edin
  sirasayi(1); // "1-ci"
</script>
```

### Nümunələr

```javascript
import { sirasayi } from 'sirasayi';

// Formatlama
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

Verilən ədədi sıra sayı formasına çevirir.

- **Parametrlər:**
  - `number` (number): Çevriləcək ədəd
- **Geri dönüş:**
  - `string`: Formatlanmış sıra sayı

### TypeScript dəstəyi

Bu paket TypeScript tərifləri ilə gəlir, buna görə avtomatik type və IDE köməkçiləri mövcuddur.

```typescript
import { sirasayi } from 'sirasayi';

const ordinal: string = sirasayi(1);
```

### Brauzer dəstəyi

Paket aşağıdakı formatlarda mövcuddur:
- CommonJS (dist/index.js)
- ES Modules (dist/index.mjs)
- UMD (dist/index.umd.js)

Ən müasir bundler-lər avtomatik ES Modules versiyasını istifadə edəcək.

### Töhfələr

İstənilən kömək və töhfə alqışlanır! Pull Request göndərməkdən çəkinməyin.

### Lisenziya

MIT © azizoid
# DateFnsDateType

`date-fns` 라이브러리에서 사용하는 `Date`의 타입입니다. (`number | Date`)

# getDateDistance

두 개의 `Date`가 가리키는 시간의 차이를 '일', '시간', '분', '초' 단위로 계산합니다.

계산하는 시간의 차이는 `endDate - startDate` 입니다. `startDate` 가 `endDate` 보다 나중이면, `0` 을 반환합니다.

```typescript
function getDateDistance(
  // 시작 시간
  startDate: Date,
  // 끝 시간
  endDate: Date
): { days: number; hours: number; minutes: number; seconds: number };
```

## Example

```typescript
const startDate = new Date(2022, 8, 10);
const endDate = new Date(2022, 8, 11);

// { days: 1, hours: 0, minutes: 0, seconds: 0 }
getDateDistance(startDate, endDate);
```

# getDateDistanceText

[getDateDistance()](https://slash.page/ko/libraries/common/date/src/docs/getdatedistance.i18n)가 반환하는 값을 인자로 받아서, 문자열로 포맷팅 해줍니다.

```typescript
function getDateDistanceText(
  // getDateDistance가 반환한 시간의 차이 값
  timeUnits: { days: number; hours: number; minutes: number; seconds: number },
  // 텍스트를 포매팅할 방법
  options: {
    // 일, 시, 분, 초를 구분할 separator
    // @default ' '
    separator?: string;
    // `일`을 포함할 기준
    // @default t => t.days > 0
    days?: (timeUnits: TimeUnits) => boolean;
    // `시간`을 포함할 기준
    // @default t => t.hours > 0
    hours?: (timeUnits: TimeUnits) => boolean;
    // `분`을 포함할 기준
    // @default t => t.minutes > 0
    minutes?: (timeUnits: TimeUnits) => boolean;
    // `초`를 포함할 기준
    // @default t => t.seconds > 0
    seconds?: (timeUnits: TimeUnits) => boolean;
  }
): string;
```

## Examples

```typescript
const startDate = new Date('2022-08-10');
const endDate = new Date('2022-08-11');

const distance = getDateDistance(startDate, endDate);
getDateDistanceText(distance); // '1일'
```

```typescript
const startDate = new Date('2022-08-10T00:00:00+09:00');
const endDate = new Date('2022-08-11T12:00:00+09:00');

const distance = getDateDistance(startDate, endDate);
getDateDistanceText(distance); // '1일 12시간'
```

```typescript
const startDate = new Date('2022-08-10T00:00:00+09:00');
const endDate = new Date('2022-08-11T12:00:00+09:00');

const distance = getDateDistance(startDate, endDate);
getDateDistanceText(distance, { days: t => t.days > 1 }); // '12시간'
```

# isEqualOrAfter

첫 번째 Date(`lhs`)가 두 번째 Date(`rhs`)와 같거나 늦은지를 판단합니다.

```typescript
function isEqualOrAfter(
  // 계산할 첫번째 Date
  lhs: Date,
  // 계산할 두번째 Date
  rhs: Date
): boolean;
```

## Example

```typescript
isEqualOrAfter(new Date(2022, 8, 10), new Date(2022, 8, 10)); // true
isEqualOrAfter(new Date(2022, 9, 10), new Date(2022, 8, 10)); // true
isEqualOrAfter(new Date(2022, 8, 10), new Date(2022, 9, 10)); // false
```

# isEqualOrBefore

첫 번째 Date(`lhs`)가 두 번째 Date(`rhs`)와 같거나 빠른지를 판단합니다.

```typescript
function isEqualOrBefore(
  // 계산할 첫번째 Date
  lhs: Date,
  // 계산할 두번째 Date
  rhs: Date
): boolean;
```

## Example

```typescript
isEqualOrBefore(new Date(2022, 8, 10), new Date(2022, 8, 10)); // true
isEqualOrBefore(new Date(2022, 9, 10), new Date(2022, 8, 10)); // false
isEqualOrBefore(new Date(2022, 8, 10), new Date(2022, 9, 10)); // true
```

# kstFormat

한국 시간(KST) 기준으로 Date를 포맷팅하는 함수입니다.

이 함수를 사용하지 않으면, `date-fns/locale/ko` 를 매번 import 하여 사용해야 합니다.

## Examples

```typescript
import { kstFormat } from '@toss/date';

// 한국 시간 (GMT+9) 기준으로 Date를 ISO 8601 문자열로 바꿉니다.
kstFormat(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
```

```typescript
// 위 예제는 아래 코드와 똑같습니다.
import { format } from 'date-fns';
import locale from 'date-fns/locale/ko';

format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", { locale });
```

# parseYYYYMMDD

입력받은 문자열을 Date로 변환합니다. Date로 바꾸는데 실패할 경우, `new Error('Invalid date format')` 을 throw 합니다.

## Example

```typescript
parseYYYYMMDD('2022-09-10');
```

# roundUpHoursInDays

24시간 단위로 올림합니다.

## Example

```typescript
roundUpHoursInDays(48); // 48
roundUpHoursInDays(35); // 48
roundUpHoursInDays(8); // 24
roundUpHoursInDays(0); // 0
```

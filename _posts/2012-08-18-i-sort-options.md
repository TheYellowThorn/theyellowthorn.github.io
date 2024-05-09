---
category: Interfaces
title: 'ISortOptions'
page: 'api'
layout: null
---

```typescript
import { ISortOptions } from '@tablejs/community';
```

#### Description:

Provides a structure for sort options. Extends `IAbstractOptions`.

### Properties:

| Property          | Description   |
| ------------- | ------------- |
| **variableIdentifier**: <br/>`string` | A property used to determine the value from an item that should be sorted (ex: `'name'` returns the value of `item.name`)  |
| **comparator**: <br/>`(valueA: any, valueB: any) => number` | A function used for comparing values.  A negative return value will sort valueA before valueB.  A positive return value will sort valueA after valueB.  A return value of 0 keeps the current order intact |
| **variableMapper?**: <br/>`Function | Function[]` | `Optional` Function that will modify the value of an item before it is sorted.  Sort comparison will occur on the modified value |
| **initialSortDirection**: <br/>`number | SortDirection.DESCENDING | SortDirection.NONE | SortDirection.ASCENDING` | The starting sort direction. Defaults to `SortDirection.NONE` |
| **sortOrder**: `number` | The order placement in which the set of sort options will will be sorted |
| **useLocaleCompare**: `boolean` | Toggles whether to use locale comparison.  See [String.localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare){:target="_blank" rel="noopener"} |
| **localeCompareOptions**: <br/>`[string | string[]] | [string | string[], Intl.CollatorOptions]` | Options given for a locale comparison.  See [Intl.CollatorOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator){:target="_blank" rel="noopener"} |
| **directionOrder**: <br/>`(number | SortDirection.ASCENDING | SortDirection.DESCENDING | SortDirection.NONE)[]` | The order of directions in which the options should sort. |
| **sortDirection**: <br/>`number | SortDirection.DESCENDING | SortDirection.NONE | SortDirection.ASCENDING` | The current sort direction of the options |

<br/>

### Usage:

See [SortOptions](./#/sort-options)

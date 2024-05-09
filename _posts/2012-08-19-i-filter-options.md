---
category: Interfaces
header: Interfaces
title: 'IFilterOptions'
page: 'api'
layout: null
---

```typescript
import { IFilterOptions } from '@transunion-ui/tablejs';
```

#### Description:

Provides a structure for filter options. Extends `IAbstractOptions`.

### Properties:

| Property          | Description   |
| ------------- | ------------- |
| **variableIdentifiers**: <br/>`string | string[]` | A property or array of property identifiers used to determine the value from an item that should be filtered (ex: `'name'` returns the value of `item.name`)  |
| **comparator**: <br/>`(element: any, index: number, array: any[]) => boolean` | A function used for comparing values.  If the function returns true, the item will be pushed into the filtered array.  A false return value will exclude the compared item from the filtered array |
| **variableMappers?**: <br/>`Function | Function[]` | `Optional` Function(s) that will modify the value(s) of an item before it is filtered.  Filtering comparison will occur on the modified value |
| **filterValue**: <br/>`Function | Function[]` | The value by which all filtering should be compared |
| **matchType**: <br/>`string | MatchType.ALL | MatchType.ANY` | A match type to determine whether a comparator function requires a single identifier to match the `filterValue` or all identifiers |

<br/>

### Usage

See [FilterOptions](./#/filter-options)

